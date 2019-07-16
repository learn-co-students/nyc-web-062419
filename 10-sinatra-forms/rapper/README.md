## Sinatra Forms


## RESTful Routing

## CRUD for Controllers

Create -- POST
- new
    - A way for the user to tell us they need a form to use to create a new rapper 
    - GET request that returns an html form 
- create
    - The action/route that the form will submit information to 

Read -- GET
- index
    - list 
- show
    - Reads a single instance 

Update -- PATCH/PUT
- edit
- update

Delete -- DELETE
- delete/destroy

## Separation of Concerns/ Single source of truth

- Which model to go to

## Form

- A collection of inputs wrapped by an html form-tag

#Questions:
-  When we add things to the database from the browser/client where does that info go? 
    - How do we access it? 

#Process 
 - Tables first 
 - Build models 
    - Test 
- Controller 
- Views 