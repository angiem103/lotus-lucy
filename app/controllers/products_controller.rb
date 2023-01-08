class ProductsController < ApplicationController

    skip_before_action :authorized, only: :index

    def index
        products = Product.all
        if products
        render json: products
        else
            render json: {error: "No Products Found"}, status: :not_found
        end
    end


    def create
        product = Product.create(product_params)
        if product.valid?
            render json: product
        else
            render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def product_params
        params.permit(:name, :price, :img)
    end
end
