class Product < ApplicationRecord
    validates :name, :price, :img, presence: true

    has_many :order_details
    has_many :orders, through: :order_details
end
