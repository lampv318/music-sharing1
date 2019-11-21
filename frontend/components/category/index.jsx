import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as CategoryApiUtil from '../../utils/category_api_util';

import CategoryShow from './show';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    CategoryApiUtil.fetchCategories().then(
      data => {
        this.setState({ categories: data });
      }
    )
  }

  render() {
    let globalContext = this.context;
    const { categories } = this.state;
    let categoriesTabs;
    let categoriesContent;
    let activeClass;

    categoriesTabs = (
      categories.map((category, index) => {
        if (index === 0) {
          return (
            <li
              role="presentation"
              className="active"
              key={category.id}
            >
              <a
                href={`#category-${category.id}`}
                aria-controls={`category-${category.id}`}
                role="tab"
                data-toggle="tab"
              >
                {category.name}
              </a>
            </li>
          )
        } else {
          return (
            <li
              role="presentation"
              className=""
              key={category.id}
            >
              <a
                href={`#category-${category.id}`}
                aria-controls={`category-${category.id}`}
                role="tab"
                data-toggle="tab"
              >
                {category.name}
              </a>
            </li>
          )
        }
      })
    )

    categoriesContent = (
      categories.map(
        (category, index) => (
          <CategoryShow
            key={category.id}
            category={category}
            index={index}
          />
        )
      )
    )

    return (
      <div className="content__middle">
        <div className="category">
          <div className="category__navigation">
            <ul className="nav nav-tabs" role="tablist">
              {categoriesTabs}
            </ul>
          </div>
          <div className="category__content">
            <div className="tab-content">
              {categoriesContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CategoryIndex.contextType = AppContext;
export default CategoryIndex;
