class Api::V1::UsersController < ApplicationController

  def favorites
    user = User.find(params[:id])
    render json: user.favorite_members
  end

  def favorite
    favorite_member = FavoriteMember.create(user_id: params[:user_id], member_id: params[:member_id])

    render json: favorite_member
  end
  
  # user create
  # signup
  def create
    user = User.new(username: params[:username], password: params[:password])

    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end
end
