class RemoveFloatFromProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :float, :string
  end
end
