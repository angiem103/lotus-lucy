class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    
    def create
        customer =  Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            Session.create([:customer_id] = customer.id)
            render json: customer, status: :created
        else
            render json: {error: {login: "Invalid Username or Password"}}, status: :unauthorized
        end
    end

    def destroy
        customer = Customer.find_by(id: session[:customer_id])
        if customer
            session.delete :customer_id
            head :no_content
        else
            render json: { errors: ["Not authorized"] }, status: unauthorized
        end
    end

end
