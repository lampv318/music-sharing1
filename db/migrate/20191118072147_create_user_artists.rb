class CreateUserArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :user_artists do |t|
      t.bigint :user_id
      t.bigint :artist_id

      t.timestamps
    end
  end
end
