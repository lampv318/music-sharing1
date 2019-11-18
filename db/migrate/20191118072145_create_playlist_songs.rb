class CreatePlaylistSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :playlist_songs do |t|
      t.bigint :playlist_id
      t.bigint :song_id

      t.timestamps
    end
  end
end
