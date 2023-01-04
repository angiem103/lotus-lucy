class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :order_id, :quantity, :cost
end
