# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

Customer.create( username:"angie103", password:"password123", name:"Angie Maticorena", phone_number:Faker::Base.unique.numerify('(###) ### ####'), email:Faker::Internet.free_email(name: 'Angie'), address:  Faker::Address.unique.full_address);

Product.create(name: "Pink Mini Bouquet", price: 25, img:"https://images.pexels.com/photos/9925116/pexels-photo-9925116.jpeg?auto=compress&cs=tinysrgb&w=600");
Product.create(name: "White Roses Bouquet", price: 35, img:"https://images.pexels.com/photos/6913764/pexels-photo-6913764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
Product.create(name: "Sunshine Bouquet", price: 35, img:"https://images.pexels.com/photos/9925082/pexels-photo-9925082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
Product.create(name: "Pink Garden Bouquet", price: 45, img: "https://images.pexels.com/photos/5750174/pexels-photo-5750174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
Product.create(name: "Unique Like You Bouquet", price: 45, img:"https://images.pexels.com/photos/7381027/pexels-photo-7381027.jpeg");
Product.create(name: "Scarlet Lily Bouquet", price: 40, img:"https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg");
Product.create(name: "Fall For You Bouquet", price: 45, img:"https://images.pexels.com/photos/9924908/pexels-photo-9924908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
Product.create(name: "Sweet Surprise Bouquet", price: 50, img:"https://images.pexels.com/photos/7700277/pexels-photo-7700277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
Product.create(name: "Love Potion Bouquet", price: 50, img: "https://images.pexels.com/photos/9924900/pexels-photo-9924900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

Order.create(customer_id: 1, order_date: "2023-01-05");

OrderDetail.create(product_id: 8, order_id: 1, quantity: 2);
OrderDetail.create(product_id: 4, order_id: 1, quantity: 1);
OrderDetail.create(product_id: 9, order_id: 1, quantity: 1);



puts "Seeding data"