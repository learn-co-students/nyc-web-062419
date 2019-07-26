class UsersController < ApplicationController
  before_action :authorized?, except: [:new, :create]
  
  def new
    @user = User.new
  end
  def create 
    @user = User.create(user_params)
    session[:user_id] = @user.id 
    redirect_to user_path(@user)
  end
  def edit 

  end 

  def show 
    @user = User.find(params[:id])
  end

  private
  def user_params 
    params.require(:user).permit(:full_name, :username, :password)
  end
end
