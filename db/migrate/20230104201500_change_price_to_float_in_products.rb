class ChangePriceToFloatInProducts < ActiveRecord::Migration[6.1]
  def change
    change_column :products, :price, :float, using: 'price::double precision'
  end
end
