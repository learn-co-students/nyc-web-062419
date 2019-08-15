class Api::V1::ThiefsController < ApplicationController
  def index
    thieves = Thief.all

    render json: thieves
  end

  def update
    thief = Thief.find(params[:id])
    thief.update(code_name: params[:code_name])

    render json: thief
  end
end
