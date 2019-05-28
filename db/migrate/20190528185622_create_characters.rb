class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.string :race
      t.string :class_value
      t.string :skill
      t.string :inventory
      t.integer :exp
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :wisdom
      t.integer :charisma
      t.integer :hitpoints

      t.timestamps
    end
  end
end
