class Api::V1::MembersController < ApplicationController
  
  def index
    members = Member.all

    render json: members
  end

  def create
    member = Member.new(member_params)
    
    render json: member
  end

  private
  
  def member_params
    params.require(:member).permet(:name, :role, :nickname, :image)
  end

end
