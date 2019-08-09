class Api::V1::MarksController < ApplicationController
  def steak
    render json: {name: "Beefy"}
  end
end
