class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.bigint :artist_id
      t.bigint :album_id
      t.integer :year
      t.string :file
      t.integer :track_no, default: 1
      t.float :duration
      t.integer :bit_rate

      t.timestamps
    end
  end
end
