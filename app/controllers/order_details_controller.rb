class OrderDetailsController < ApplicationController

    def index
        order_details = OrderDetail.all
        if order_details
        render json: order_details
        else
            render json: {error: "No Order Details Found"}, status: :not_found
        end
    end

    def create
        order_details = OrderDetail.create(order_details_params)
        render json: order_details, status: :created
    end

    private

    def order_details_params
        params.permit(:order_id, :product_id, :quantity)
    end

end
