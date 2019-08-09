class CreateThiefs < ActiveRecord::Migration[5.2]
  def change
    create_table :thiefs do |t|
      t.string :name
      t.string :code_name
      t.string :specialty
      t.integer :score

      t.timestamps
    end
  end
end
