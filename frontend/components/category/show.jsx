import React, {Fragment} from 'react';

import {constants} from '../../constants/constants';

import * as AlbumApiUtil from '../../utils/album_api_util';

import AlbumItem from '../album/_album';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      albums: []
    };
  }

  getAlbums = category => {
    AlbumApiUtil.fetchCategoryAlbums(category.id).then(
      data => {
        this.setState({
          category: category,
          albums: data
        });
      }
    )
  }

  componentDidMount() {
    let {category} = this.props;
    this.getAlbums(category);
  }

  componentDidUpdate() {
    let {category} = this.props;
    if (category.id === this.state.category.id) {return}
    this.getAlbums(category);
  }

  render() {
    const { category, albums } = this.state;
    const categoryId = `category-${category.id}`
    let albumsContent;

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <AlbumItem key={album.id} album={album} />
        ))
      )
    }

    return (
      <div
        role="tabpanel"
        className={`tab-pane ${this.props.index === 0 ? "active" : ""}`}
        id={categoryId}
      >
        <div className="media-cards">
          {albumsContent}
        </div>
      </div>
    )
  }
}

export default CategoryShow;
