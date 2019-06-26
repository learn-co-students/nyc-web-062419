# One to Many Relationships

#Parking Lot:
- What is the purpose of the @ for an instance variable 

#Goal for today:
- Teach Ruby what a Dealership is
- Identify the relationship between a Dealership and a car 


# Dealership model:
- Dealership has a name 
- Dealership has a city 
- Dealership has an owner*
- Dealership has employees* 











Domain - The world that our app lives in 
Model - class 
Domain Model(s)

## Objectives

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
