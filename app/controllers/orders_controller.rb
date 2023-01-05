class OrdersController < ApplicationController

    def index
        orders = Order.all
        if orders
        render json: orders
        else
            render json: {error: "No Orders Found"}, status: :not_found
        end
    end

    def show
        order = Order.find_by(id: params[:id])
        if order
            render json: order
        else
            render json: { error: "No information found" }, status: :not_found
        end
    end

end
