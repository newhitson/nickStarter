# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` -create a session
                    -I don't think i need a patch

### Session

- `POST /api/session` -create a session
- `DELETE /api/session` -end a session

### Projects

- `GET /api/projects` -get all projects
- `POST /api/projects` -create a new project
- `GET /api/projects/:id` -get a specific project
- `PATCH /api/projects/:id` -change a project?
- `DELETE /api/projects/:id` -delete a project?

### Rewards

- `POST /api/rewards` -create a new reward
- `GET /api/rewards/:id` -get a specific project

### category

- `GET /api/categories` -get all categories
- `GET /api/categories/:id` -get a specific category
