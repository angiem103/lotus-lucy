class RemoveDescFromProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :desc, :string
  end
end
