class Api::V1::AuthController < ApplicationController
  
  # session create
  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # ENV['secret_token']
      render json: {user: user, token: JWT.encode({userId: user.id}, 'secret')} 
    else 
      render json: {errors: 'please enter the correct username and password'}
    end
    # request.headers
    # authenticate password

  end

  def autologin
    token = request.headers['Authorization']
    user_id = JWT.decode(token, 'secret')[0]["userId"]
    user = User.find(user_id)

    render json: user
    # check the headers
    # get that user id
    # find the user
    # send it back
  end
end
