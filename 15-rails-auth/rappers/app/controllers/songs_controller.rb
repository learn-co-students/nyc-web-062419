class SongsController < ApplicationController
  def index
  end

  def show
  end

  def new
    @song = Song.new 
    @rappers = Rapper.all
  end
  def create 
    song = Song.create(song_params)
    redirect_to song_path(song)
  end

  def edit
    @song = Song.find(params[:id])
    @rappers = Rapper.all
  end
  def update 
    song = Song.find(params[:id])
    song.update(song_params)
    redirect_to song_path(song)
  end

private 

def song_params
  params.require(:song).permit(:title, :release_year, :rapper_id, :fire)
end



end
