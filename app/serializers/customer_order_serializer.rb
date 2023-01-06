class CustomerOrderSerializer < ActiveModel::Serializer
    attributes :id, :product_id, :order_id, :quantity, :cost
  
    has_many :order_details
  end
  