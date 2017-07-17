## Component Hierarchy

### AuthFormContainer
  - AuthForm

### FrontPageContainer
  - Navbar
    + Left nav
      - CategoriesContainer
    + Right nav
      - SearchContainer
      - AuthFormContainer
  - Splash site -will this need a container?
  - FeaturedProjectsContainer
    + nav
      - categoryContainer
    + ProjectBlurbContainer

### ProjectBlurbContainer
  - Image
  - category
  - Description
  - Author
  - funded

### ProjectPageContainer
  - ProjectNavContainer
  - projectPictureContainer

### CategoriesContainer
  - Categories
    + ProjectsInCategoryContainer

### SearchContainer
  - NavSearch
  - SearchBlurbContainer


## Routes

|Path                      | Component                     |
|--------------------------|-------------------------------|
| "/sign-up"               | "AuthFormContainer"           |
| "/log-in"                | "AuthFormContainer"           |
| "/"                      | "FrontPageContainer"          |
| "/project/:projectId"    | "ProjectPageContainer"        |
| "/categories/            | "CategoriesContainer"         |
| "/categories/:categoryId | "ProjectsInCategoryContainer" |
| "/search"                | "SearchBlurbContainer"        |
| "/project/new"	         | "NewProject"                  |
