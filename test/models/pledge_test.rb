# == Schema Information
#
# Table name: pledges
#
#  id             :integer          not null, primary key
#  backer_id      :integer
#  project_id     :integer
#  amount_pledged :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class PledgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
