class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :order_id, :quantity, :cost

  belongs_to :order
  belongs_to :product
end
