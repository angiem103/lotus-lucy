class ChangeItemDetailsToArrayInOrders < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :item_details, :string, array: true, default: [], using: 'item_details::character varying[]'
  end
end
