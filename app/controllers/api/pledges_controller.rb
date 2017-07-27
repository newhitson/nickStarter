class Api::PledgesController < ApplicationController


  # this might not be nessessary
  def index
    if params[:reward_id]
      @pledges = Pledge.where(reward_id: params[:reward_id])
    else
      @pledges = Pledges.all
    end
    render :index
  end


  def create
    @pledge = Pledge.new(pledge_params)
    #project is really reward id
    @pledge.amount_pledged = 0
    #i dont think i needed this feild
    @pledge.backer_id = current_user.id



    if @pledge.save
      @pledge.project.funded += @pledge.reward.cost
      render json: @pledge
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def pledge_params
    params.require(:pledge).permit(:reward_id, :backer_id,
                                   :amount_pledged)
  end

end
