Features
Full featured shopping cart
Product reviews and ratings
Top products carousel
Product pagination
Product search feature
User profile with orders
Admin product management
Admin user management
Admin Order details page
Mark orders as delivered option
Checkout process (shipping, payment method, etc)
PayPal / credit card integration
Database seeder (products & users)
Usage
Env Variables
Create a .env file in then root and add the following

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

# Run frontend (:3000) & backend (:5000)
yarn dev

# Run backend only
yarn server
Build & Deploy
# Create frontend prod build
cd frontend
yarn build
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

# Import data
yarn data:import

# Destroy data
yarn data:destroy
Sample User Logins

admin@example.com (Admin)
123456

client@example.com (Client)
123456
