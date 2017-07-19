class Api::ProjectsController < ApplicationController
  #before_action :require_logged_in, only: [:create]
  def index
    @projects = Projects.all
    render "api/projects/index"
  end

  def show
    @project = Projects.find(params[:id])
  end

  def create
    @project = Project.create!(project_params)
    render :index
  end

  def update
  end

  def destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :image_url, :description,
                                    :tagline, :end_date, :funding_goal,
                                    :creator_id, :category_id)
  end


end
