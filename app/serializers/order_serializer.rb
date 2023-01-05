class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :order_date

  belongs_to :customer
  has_many :products
end
