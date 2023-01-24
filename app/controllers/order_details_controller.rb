class OrderDetailsController < ApplicationController

    # skip_before_action :authorized, only: :create

    # def index
    #     order_details = OrderDetail.all
    #     if order_details
    #     render json: order_details
    #     else
    #         render json: {error: "Not Found"}, status: :not_found
    #     end
    # end

    def create
        order_detail = OrderDetail.create(order_details_params)
        if order_detail.valid?
            render json: order_detail
        else
            render json: { errors: order_detail.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        order_detail = OrderDetail.find_by(id: params[:id])
        if order_detail
            order_detail.update(order_details_params)
            render json: order_detail
        else
            render json: { error: "Not Found" }, status: :not_found
        end
    end

    private

    def order_details_params
        params.permit(:order_id, :product_id, :quantity)
    end

end
