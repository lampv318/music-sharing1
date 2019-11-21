class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :year
      t.integer :disc_no, default: 1
      t.string :picture

      t.timestamps
    end
  end
end
