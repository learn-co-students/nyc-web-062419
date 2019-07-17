class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def show
  end

  def create 
    byebug
  end
  def new
  end

  def edit
  end
end
