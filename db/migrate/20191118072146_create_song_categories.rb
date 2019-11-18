class CreateSongCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :song_categories do |t|
      t.bigint :song_id
      t.bigint :category_id

      t.timestamps
    end
  end
end
