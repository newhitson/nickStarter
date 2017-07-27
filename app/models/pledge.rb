class Pledge < ApplicationRecord
  validates :reward_id, :backer_id, :amount_pledged, presence: true

  belongs_to :reward,
  primary_key: :id,
  foreign_key: :reward_id,
  class_name: :Reward



end
