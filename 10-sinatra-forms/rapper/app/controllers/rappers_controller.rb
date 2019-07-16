class RappersController < ApplicationController


#Index Action 
    get "/rappers" do
    @rappers = Rapper.all
    erb :"rappers/index" 
  end
  
  #New Action
  get "/rappers/new" do 
    erb :"rappers/new"
end

get "/rappers/:id/top_songs" do
    #code 
end



#Show Action
get "/rappers/:id" do 
    @rapper = Rapper.find(params[:id])
    erb :"rappers/show"
end 

#Create Action
post "/rappers" do 
  rapper = Rapper.create(params)
  redirect "/rappers/#{rapper.id}"
end


#Edit Action
# The User's way of requesting a form to edit 
# An edit form prepopulates the existing information 
# HTML forms only know how to do GET and POST requests but we need our form to send a PATCH request
# You will need to figure out how to tell our app to override the default form behavior to allow for a PATCH request


#Update Action 
# The action that the edit form will send the information to 





end