class RenameProjectIdToRewardId < ActiveRecord::Migration[5.0]
  def change
    rename_column :pledges, :project_id, :reward_id
  end
end
