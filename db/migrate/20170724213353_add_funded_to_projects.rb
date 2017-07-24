class AddFundedToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :funded, :integer
  end
end
