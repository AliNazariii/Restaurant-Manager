first install mysql

sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation

sudo mysql
CREATE DATABASE restaurant_manager;

sudo mysql restaurant_manager < restaurant_manager.sql


cd backend
npm install
npm start

cd frontend
npm install
npm run dev

