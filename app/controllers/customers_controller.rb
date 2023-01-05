class CustomersController < ApplicationController

    def index
        customers = Customer.all
        if customers
        render json: customers, include: [ 'orders', 'orders.order_details'] 
        else
            render json: {error: "No Customers Found"}, status: :not_found
        end
    end

    def show
        customer = Customer.find(session[:customer_id])
        if customer
            render json: customer
        else
            render json: { error: "Customer Not Found" }, status: :not_found
        end
    end

    def create
        customer = Customer.create(customer_params)
        if customer.valid?
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
