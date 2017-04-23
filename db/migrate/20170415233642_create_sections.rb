class CreateSections < ActiveRecord::Migration
  def change
    create_table(:sections, id: :uuid) do |t|
      t.text :body
      t.integer :content_type
      t.uuid :post_id

      t.timestamps null: false
    end
  end
end
