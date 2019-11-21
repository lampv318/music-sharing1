class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :info
      t.string :picture

      t.timestamps
    end
  end
end
