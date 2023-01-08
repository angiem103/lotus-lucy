# Lotus Lucy

Lotus Lucy is a full-stack one page application that I've created for a flower-selling business using React and Ruby on Rails. While this website focuses on a flower shop, it can be modified to be used by other businesses. 

## User Stories

* MVP: As a user, I am able to:
    - Sign up for an account
    - Login and & stay logged in
    - Logout
    - View all products with names and prices
    - View past orders
    - Place a new order
    - Edit an order
    - Delete an order
    - Add a new product

* Stretch: As a user, I am able to:
    - Have different authorization levels for customer and owner
    - Add personalizations and special requests to orders
    - Search for specific flowers
    - As a customer, add reviews and pictures



## Models and Relationships
<img width="834" alt="Screen Shot 2023-01-08 at 6 17 45 PM" src="https://user-images.githubusercontent.com/91964904/211224135-6cd0910a-5dd5-4431-868e-c54db1e2db56.png">

* A User has many Orders
* An Order has many Products through OrderDetails
* A Product belongs to many Orders through OrderDetails
* An OrderDetail belongs to an Order and a Product

## Commands
After forking/cloning the repo:
  - Run bundle install 
  - Run npm install --prefix client
  - Run npm start --prefix client
  - Run rails s

## Ports used

* React front-end: localhost:4000
* Ruby back-end: localhost:3000



## Contributing

Thank you for showing interest in my project! Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Credits

Stock images were obtained from: 

- https://www.pexels.com/@punchbrandstock/
- https://www.pexels.com/@shvetsa/
- https://www.pexels.com/@28799211/
