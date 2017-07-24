json.extract! project, :id, :title, :image_url, :description, :tagline,
              :end_date, :funding_goal, :creator_id, :category_id, :funded
json.set! :creator, project.creator.username
