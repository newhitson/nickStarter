```js
{
  session: {
    currentUser: null,
    errors: []
  },

  user: {
    pledge_ids: [1,2,3],
    project_ids: [4,2,3]
  }

  projects: {
    "1": {
      id: 1,
      title: "title",
      image_url: "url",
      description: "description",
      end_date: "March 5 2018",
      funding_goal: 10000,
      tagline: "tagline",
      creator_id: 1,
      category_id: 1,
      reward_ids: [1, 2, 3, 4, 5],
      errors: []
    }
  },

  rewards: {
    "1": {
      id: 1,
      project_id: 1,
      title: "title",
      description: "desc",
      cost: 1000,
      delivery_date: "101242"
    }
  },

  categories: {
    "1": {
      id: 1,
      name: "category"
    }
  },

  pledges: {
    "1": {
      id: 1,
      backer_id: 1,
      pledgeable_type: "project",
      pledgeable_id: 1
    }
  }
}
```
