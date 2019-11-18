class CreateAlbumCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :album_categories do |t|
      t.bigint :album_id
      t.bigint :category_id

      t.timestamps
    end
  end
end
