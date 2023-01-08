class AddItemDetailsColumnToOrdersAsJson < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :item_details, :json
  end
end
