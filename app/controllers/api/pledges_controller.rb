class Api::PledgesController < ApplicationController
  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def pledge_params
    params.require(:pledge).permit(:backer_id, :project_id,
                                   :amount_pledged)
  end

end
