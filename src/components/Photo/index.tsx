import React from 'react';
import { IPhoto } from 'app/types/api';
import './style';
import store from 'app/store';
import {
  ISELECT_PHOTO,
} from 'app/store/types/actions';

interface IProps {
  photo: IPhoto;
}

export default class Photo extends React.PureComponent<IProps> {
  handleClick = () => store.dispatch<ISELECT_PHOTO>( {
    type: 'SELECT_PHOTO',
    photo: this.props.photo,
  } );
  render () {
    let
      {
        props: {
          photo,
        },
        handleClick,
      } = this;

    return <div 
      className='Photo' title={photo.title}
      onClick={handleClick}
    >
      <div className='Photo__title'>{photo.title}</div>
      <img className='Photo__thumbnail' src={photo.thumbnailUrl} alt={photo.title}/>
    </div>;
  }
}