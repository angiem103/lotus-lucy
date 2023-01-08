class CustomersController < ApplicationController

    skip_before_action :authorized, only: :create
    
    def index
        customers = Customer.all
        if customers
        render json: customers, include: [ 'orders', 'orders.order_details', 'orders.products'] 
        else
            render json: {error: "No Customers Found"}, status: :not_found
        end
    end

    def show
        current_user = Customer.find(session[:customer_id])
        render json: current_user, include: [ 'orders', 'orders.order_details', 'orders.products'] 
    end

    def create
        customer = Customer.create(customer_params)
        if customer.valid?
            session[:customer_id] = customer.id
            render json: customer
            
        else
            render json: { errors: customer.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 
    
    def customer_params
        params.permit(:id, :name, :phone_number, :email, :address, :username, :password)
    end


        

end
