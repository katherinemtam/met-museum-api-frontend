import { Component } from 'react';
import Artwork from './Artwork';
import './Gallery.css';

export default class Gallery extends Component {
  render() {
    const { artworks, onFavorited } = this.props;
    return (
      <ul className='Gallery'>
        {artworks.map((artwork) => (
          <Artwork
            key={artwork.objectID}
            artwork={artwork}
            isFavorite={false}
            onFavorited={onFavorited}
          />
        ))}
      </ul>
    );
  }
}
