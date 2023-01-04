class OrderDetailsController < ApplicationController

    def index
        order_details = OrderDetail.all
        if order_details
        render json: order_details
        else
            render json: {error: "No Order Details Found"}, status: :not_found
        end
    end

end
