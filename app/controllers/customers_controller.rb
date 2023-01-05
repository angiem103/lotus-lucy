class CustomersController < ApplicationController

    def index
        customers = Customer.all
        if customers
        render json: customers
        else
            render json: {error: "No Customers Found"}, status: :not_found
        end
    end

    def show
        customer = Customer.find_by(id: params[:id])
        if customer
            render json: customer
        else
            render json: { error: "Customer Not Found" }, status: :not_found
        end
    end

end
