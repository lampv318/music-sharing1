class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :artist_id
      t.integer :album_id
      t.integer :year
      t.integer :track_no, default: 1
      t.float :duration
      t.integer :bit_rate
      t.string :save_file

      t.timestamps
    end
  end
end
