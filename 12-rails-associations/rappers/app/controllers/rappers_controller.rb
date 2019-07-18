class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  
  def new
    @rapper = Rapper.new 
  end
  
  def edit
    @rapper = Rapper.find(params[:id])
  end
 
  def create 
    rapper = Rapper.create(rapper_params)
    redirect_to rapper_path(rapper)
  end

  private

  def rapper_params
    #{"rapper"=>{name: "", age: 234, admin: true}}
    #{name: "", age: 234}
    params.require(:rapper).permit(:name, :age) 
  end
end
