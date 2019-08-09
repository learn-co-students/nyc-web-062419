class Api::V1::ThiefsController < ApplicationController
  def index
    thieves = Thief.all

    render json: thieves
  end
end
