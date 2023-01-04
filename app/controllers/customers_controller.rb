class CustomersController < ApplicationController

    def index
        customers = Customer.all
        if customers
        render json: customers
        else
            render json: {error: "No Customers Found"}, status: :not_found
        end
    end

end
