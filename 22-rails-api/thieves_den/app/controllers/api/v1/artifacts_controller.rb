class Api::V1::ArtifactsController < ApplicationController
  def index
    artifacts = Artifact.all
    render json: artifacts
  end

  def show
    artifact = Artifact.find(params[:id])

    render json: artifact
  end
end
