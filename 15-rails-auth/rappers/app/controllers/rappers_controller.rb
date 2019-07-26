class RappersController < ApplicationController
before_action :authorized?

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
    @rapper = Rapper.new(rapper_params)
    if @rapper.valid? 
      @rapper.save 
      redirect_to @rapper 
    else 
      flash.now[:message] = @rapper.errors.full_messages[0]
      render :new 
    end
  end

  private

  def rapper_params
    #{"rapper"=>{name: "", age: 234, admin: true}}
    #{name: "", age: 234}
    params.require(:rapper).permit(:name, :age) 
  end
end
