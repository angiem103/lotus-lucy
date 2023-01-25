class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email, :address, :username, :password
 
  has_many :orders
end
