class Api::PledgesController < ApplicationController

  # this might not be nessessary
  def index
    if params[:project_id]
      @pledges = Pledge.where(project_id: params[:project_id])
    else
      @pledges = Pledges.all
    end
    render :index
  end


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
