class OrdersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create

    def index
        orders = Order.all
        if orders
        render json: orders
        else
            render json: {error: "Order Not Found" }, status: :not_found
        end
    end

    def show
        order = Order.find_by(id: params[:id])
        if order
            render json: order
        else
            render json: { error: "Order Not Found" }, status: :not_found
        end
    end

    def create
        order = Order.create(order_params)
        if order.valid?
            order.item_details.each do |item_attribs|
                order.order_details.create(item_attribs)
            end
            render json: order
        else
            render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        order = Order.find_by(id: params[:id])
        if order
            order.update(order_params)
            render json: order
        else
            render json: { error: "Order Not Found" }, status: :not_found
        end
    end

    def destroy
        order = Order.find_by(id: params[:id])
        if order
            order.destroy
            head :no_content
        else
            render json: {error: "Order Not Found"}, status: :not_found
        end
    end


    private

    def order_params
        params.permit(:customer_id, :order_date, item_details: [:product_id, :quantity] )
    end

end
