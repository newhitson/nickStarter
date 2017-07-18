# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
url_image       | string    | optional


## projects
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
image_url          | string    | not null
description        | text      | not null
end_date           | date      | not null
funding_goal       | integer   | not null
tagline            | text      | not null
creator_id         | integer   | not null, foreign key (references users), indexed
category_id        | integer   | not null
reward_ids         | array?    | length?

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects), indexed
title        | string    | not null
description  | string    | not null
cost         | integer   | not null
delivery_date| date      | optional

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## pledges join table
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
pledgeable_type  | string    | not null, only "projects or rewards"
pledgeable_id    | integer   | not null, foreign key (references rewards), indexed
backer_id        | integer   | not null, foreign key (references users), indexed
