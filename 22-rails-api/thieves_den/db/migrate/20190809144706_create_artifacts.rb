class CreateArtifacts < ActiveRecord::Migration[5.2]
  def change
    create_table :artifacts do |t|
      t.string :name
      t.integer :value
      t.boolean :in_the_wind
      t.string :image_url

      t.timestamps
    end
  end
end
