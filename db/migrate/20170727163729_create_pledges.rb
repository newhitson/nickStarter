class CreatePledges < ActiveRecord::Migration[5.0]
  def change
    create_table :pledges do |t|
      t.integer :backer_id
      t.integer :reward_id
      t.integer :amount_pledged

      t.timestamps
    end
    add_index :pledges, :reward_id
    add_index :pledges, :backer_id
  end
end
