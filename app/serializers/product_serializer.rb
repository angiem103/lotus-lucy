class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :img

  has_many :orders
end
