import React from 'react';
import Panel from 'app/components/Panel';
import Photo from 'app/components/Photo';
import { 
  IPhoto,
  IAlbum,
} from 'app/types/api';
import store from 'app/store';
import { IDESELECT_ALBUM } from 'app/store/types/actions';
import './style';

interface IProps {
  photos: IPhoto[];
  album: IAlbum;
}

export default class AlbumsLists extends React.PureComponent<IProps> {
  handleGoBack = () => store.dispatch<IDESELECT_ALBUM>( {
    type: 'DESELECT_ALBUM',
  } );
  render () {
    let
      {
        props: {
          photos,
          album,
        },
        handleGoBack,
      } = this;
      
    return <Panel 
      title={album.title}
      iconName='camera-retro'
      onGoBack={handleGoBack}
      className='Photos-List'
    >
      {
        photos.map( photo => <Photo
          key={photo.id}
          photo={photo}
        /> )
      }
    </Panel>;
  }
}