class Api::RewardsController < ApplicationController
  def index
    if params[:project_id]
      @rewards = Reward.where(project_id: params[:project_id])
                                #project_id?
    else
      @rewards = Reward.all
    end
    render :index
  end


  def create

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
