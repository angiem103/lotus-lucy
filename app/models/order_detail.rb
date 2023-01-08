class OrderDetail < ApplicationRecord

    validates :quantity, numericality: { only_integer: true }

    belongs_to :order
    belongs_to :product

    

end
