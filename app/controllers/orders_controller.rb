class OrdersController < ApplicationController

    def index
        orders = Order.all
        if orders
        render json: orders
        else
            render json: {error: "No Orders Found"}, status: :not_found
        end
    end

end
