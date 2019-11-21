class CreateSongCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :song_categories do |t|
      t.integer :song_id
      t.integer :category_id

      t.timestamps
    end
  end
end
