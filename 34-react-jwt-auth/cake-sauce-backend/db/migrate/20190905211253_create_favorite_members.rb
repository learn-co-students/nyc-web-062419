class CreateFavoriteMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_members do |t|
      t.references :user, foreign_key: true
      t.references :member, foreign_key: true

      t.timestamps
    end
  end
end
