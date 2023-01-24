class OrdersController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :created
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # def index
    #     orders = Order.all
    #     if orders
    #     render json: orders
    #     else
    #         render json: {error: "Order Not Found" }, status: :not_found
    #     end
    # end

    def show
        customer = Customer.find(sessions[:customer_id])
        order = customer.orders.find_by(id: params[:id])
        if order
            render json: order
        else
            render json: { error: "Order Not Found" }, status: :not_found
        end
    end

    def create
        customer = Customer.find(sessions[:customer_id])
        if customer
            order = Order.create!(order_params)
                order.item_details.each do |item_attribs|
                    order.order_details.create(item_attribs)
                end
            render json: order
        end
    end

    def update
        customer = Customer.find(sessions[:customer_id])
        order = customer.orders.find_by(id: params[:id])
            order.update!(order_params)
            render json: order
    end

    def destroy
        customer = Customer.find(sessions[:customer_id])
        order = customer.orders.find_by(id: params[:id])
            order.destroy!
            head :no_content
    end
    
    def big
        customer = Customer.find(session[:customer_id])
        all_orders = customer.orders
        big_orders = all_orders.select do |order|
                quantities= []
                order.order_details.each do |detail| [
                
                end
            quantities.sum == (params[:number])
        end
        render json: big_orders

    end


    private

    def order_params
        params.permit(:customer_id, :order_date, item_details: [:product_id, :quantity] )
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid.record.errors }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
