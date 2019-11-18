class CreateAlbumArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :album_artists do |t|
      t.bigint :album_id
      t.bigint :artist_id

      t.timestamps
    end
  end
end
