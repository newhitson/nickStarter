class Pledge < ApplicationRecord
  validates :project_id, :backer_id, :amount_pledged, presence: true
end
