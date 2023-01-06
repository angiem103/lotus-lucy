class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :order_date, :total_cost

  belongs_to :customer
  has_many :order_details
  has_many :products

  def total_cost
    cost = []
    self.object.order_details.each do |details|
      product = self.object.products.find {|product| product.id = details.product_id}
      cost << product.price * details.quantity
    end
    return cost.sum
  end

end
