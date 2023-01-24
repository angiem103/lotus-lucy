class ChangeItemDetailsToTextInOrders < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :item_details, :text
  end
end
