# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  title       :string           not null
#  description :string           not null
#  cost        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reward < ApplicationRecord
  validates :title, :project_id, :description, :cost, presence: true


  # belongs_to :project
  # black magic

end
