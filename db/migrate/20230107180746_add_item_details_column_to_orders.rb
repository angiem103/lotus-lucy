class AddItemDetailsColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :item_details, :string
  end
end
