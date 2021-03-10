# Welcome to the matching app of Tim de Roller
I am a student at the University of Applied Sciences Amsterdam and this is my matching app for Project Tech.

The purpose of this app is that people who play a certain game can play it together with people without all the hassle with LFG sites and discords. No more KWTD and being ignored because you don't have a certain number of clears yet.

You can run this app by clicking this link: https://matchingapptim.herokuapp.com/

# How to install the app locally:
- First download the github repo, you can do this on the github website or copy this into your terminal: `gh repo clone maggness/PT`

- Put this repo in het right folder where you want it to install. You can navigate to the right folder with `cd` and then the path name you want. (And quick tip, if you want to navigate back you can use `cd ..`) :)

- You will need to install the packages that come with this app. You can do this bij running `npm install`. This will download the packages.

### The database
You will need to do a few more things to get it running, first you need to setup your database. You can do this by folowing the documentation of MongoDB. [here is the link](https://docs.mongodb.com/guides/server/drivers/) You will have to make a account/login, create a `cluter`, click on `collections`, and then on `create database`.

If you have a database you will have to create a .env file in the same folder where the sever.js is. 
Copy this and put it in your .env file
```
MONGO_URI=
MONGO_DB=
MONGO_USER=
MONGO_PASS= 
```

To find the URI needed to connect to your database you will have to select connect when looking at a `cluster`, setup your `connection security`, select connect your application and you will see the link.

The `MONGO_URI` is the part after the password and @ (dont copy the @ or /) until the /myFistDatabase. It will look somthing like this: `clustertim.abkya.mongodb.net`

`MONGO_DB` is the name of your database you created.

`MONGO_USER` is the user you created

And `MONGO_PASS` is the password you use for the user.

The database will look something like this:
| Table | Type | Value |
| --- | --- | --- |
| _id | ObjectId | Id mongodb |
| name | string | Destiny 2 |
| genre| string | MMO |

### Running it

To run it locally you will have to use this script: `npm start` or to run it in nodemon `npm startDev`.

You will see a welcome message and the port it will run on.

If there is a problem, contact me. I am happy to help!

# Contributers
Tim de Roller // [timderoller@gmail.com](timderoller@gmail.com)

# License
[MIT License](https://github.com/maggness/PT/blob/main/LICENSE)
