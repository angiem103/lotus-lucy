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

end
