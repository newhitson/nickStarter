# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  image_url    :string           not null
#  description  :text             not null
#  tagline      :text             not null
#  end_date     :date             not null
#  funding_goal :integer          not null
#  creator_id   :integer          not null
#  category_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  funded       :integer
#

class Project < ApplicationRecord
  validates :title, :image_url, :description, :tagline, :end_date,
            :funding_goal, :creator_id, :category_id, presence: true

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User


end
