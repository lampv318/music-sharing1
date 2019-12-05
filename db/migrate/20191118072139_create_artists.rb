class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :info
      t.string :picture
      t.string :picture_in_ws

      t.timestamps
    end
  end
end
