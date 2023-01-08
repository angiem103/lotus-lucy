class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :order_id, :quantity, :product

  belongs_to :order
  belongs_to :product
end
