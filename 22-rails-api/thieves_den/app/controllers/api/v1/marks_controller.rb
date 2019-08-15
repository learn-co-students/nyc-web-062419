class Api::V1::MarksController < ApplicationController
  def steak
    render json: {name: "Beefy"}
  end

  def create
    # successful stolen artifacts
    mark = Mark.create(thief_id: params[:thief_id], artifact_id: params[:artifact_id])

    artifact = Artifact.find(params[:artifact_id])
    
    if artifact.in_the_wind 
      render json: {errors: 'YOU CANT ALREADY STOLEN'}
    else 
      artifact.update(in_the_wind: true)
      render json: mark
    end
  end
end
