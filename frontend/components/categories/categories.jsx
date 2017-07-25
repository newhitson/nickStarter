import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Categories extends React.Component {


  render() {
    return (
      <div className="categories">
        <ul className="categories_ul">
          <li className="category_li"><Link to={`/category/1`}>Art</Link></li>
          <li className="category_li"><Link to={`/category/2`}>Comic</Link></li>
          <li className="category_li"><Link to={`/category/3`}>Design</Link></li>
          <li className="category_li"><Link to={`/category/4`}>Food</Link></li>
          <li className="category_li"><Link to={`/category/5`}>Games</Link></li>
          <li className="category_li"><Link to={`/category/6`}>Music</Link></li>
          <li className="category_li"><Link to={`/category/7`}>Technology</Link></li>
        </ul>
      </div>
    );
  }
}

export default Categories;
