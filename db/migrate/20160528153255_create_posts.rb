class CreatePosts < ActiveRecord::Migration
  def change
    create_table(:posts, id: :uuid) do |t|
      t.string :title
      t.text :body
      t.uuid :author_id, null: false, default: 'uuid_generate_v4()'
      t.boolean :public, default: false

      t.timestamps null: false
    end
  end
end
