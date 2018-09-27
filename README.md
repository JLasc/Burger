# Eat Da Burger

A web app designed to create and devour burgers! You can create a burger to add into the list, which will be created in a SQL database. Then you can eat the burger which will update the table, and position the burger in a new list. 

## Installing

*Please note: In order to run locally you will need to download Vagrant and Viritualbox*

Clone the repo `git@github.com:JLasc/Burger.git` to your desktop. 

Run the `npm install` command in your terminal of choice. 

Navigate to the `/db` folder, and source the `schema.sql` and `seeds.sql` files to your SQL GUI of choice.

Update the `connection.js` file in the `config` folder to match your SQL setup, inputting your `user` and `password`

Lastly run the command `vagrant ssh` in your terminal. Navigate to `cd /var/code` and finally enter the command `node server.js`

The site will run on `192.168.15.10:8080` in your browser

### Getting Started

The live version of the website can be viewed here: [Eat-da-burger](https://radiant-lake-77743.herokuapp.com/)

*Heroku is tempermental so if you receive an error, please refresh.* 

## Built With

* [Nodejs](https://nodejs.org/en/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Handlebars](https://www.npmjs.com/package/handlebars) 
* [Express](https://www.npmjs.com/package/express) 
* [Body-Parser](https://www.npmjs.com/package/body-parser) 


