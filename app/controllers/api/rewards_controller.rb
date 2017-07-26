class Api::RewardsController < ApplicationController

  def create
    # @project = Project.create!(project_params)
    # render :show
    @reward = Reward.new(reward_params)

    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def reward_params
    params.require(:reward).permit(:project_id, :title,
                                   :description, :cost)
  end
end
