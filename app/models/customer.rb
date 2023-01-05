class Customer < ApplicationRecord

    has_secure_password

    validates :username, uniqueness: true, presence: true, length: { minimum: 6 }
    validates :name, :phone_number, :email, :address, presence: true

    has_many :orders

end
