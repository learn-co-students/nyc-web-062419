class CreateRappers < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :age 
    end
  end
end
