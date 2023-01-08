class RemoveItemDetailsFromOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :item_details, :text
  end
end
