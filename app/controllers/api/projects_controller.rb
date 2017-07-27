class Api::ProjectsController < ApplicationController
  #before_action :require_logged_in, only: [:create]

  FRONT_PAGE_TITLES = [ "title", "title" ]

  def index
    if params[:category] && params[:category] == 8
      @projects = Project.where('title in (?)', FRONT_PAGE_TITLES)
    elsif params[:category]
      @projects = Project.where(category_id: params[:category])
    else
      @projects = Project.all
    end
    render :index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    # @project = Project.create!(project_params)
    # render :show
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :image_url, :description,
                                    :tagline, :end_date, :funding_goal,
                                    :creator_id, :category_id, :funded)
  end


end
