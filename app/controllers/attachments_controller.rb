class AttachmentsController < ApplicationController
  before_action :set_song, only: :show

  def show
    type =
      case @song.save_file.content_type
      when "audio/x-flac"
        "audio/flac"
      else
        @song.save_file.content_type
      end

    send_file @song.save_file.path, disposition: "inline", type: type
  end

  private
  def set_song
    @song = Song.find_by id: params[:song_id]
  end
end