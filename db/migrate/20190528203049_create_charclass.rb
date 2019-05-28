class CreateCharclass < ActiveRecord::Migration[5.2]
  def change
    create_table :charclasses do |t|
      t.string :name
    end
  end
end
