class CreateMarks < ActiveRecord::Migration[5.2]
  def change
    create_table :marks do |t|
      t.belongs_to :thief, foreign_key: true
      t.belongs_to :artifact, foreign_key: true

      t.timestamps
    end
  end
end
