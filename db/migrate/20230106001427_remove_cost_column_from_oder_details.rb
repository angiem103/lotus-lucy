class RemoveCostColumnFromOderDetails < ActiveRecord::Migration[6.1]
  def change
    remove_column :order_details, :cost, :float
  end
end
