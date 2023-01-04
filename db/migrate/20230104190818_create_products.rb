class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :desc
      t.string :price
      t.string :float
      t.string :img

      t.timestamps
    end
  end
end
