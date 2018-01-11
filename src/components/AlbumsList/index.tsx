import React from 'react';
import Panel from 'app/components/Panel';
import Album from 'app/components/Album';
import { 
  IAlbum,
  IUser,
} from 'app/types/api';
import store from 'app/store';
import { IDESELECT_USER } from 'app/store/types/actions';
import './style';

interface IProps {
  albums: IAlbum[];
  user: IUser;
}

export default class AlbumsLists extends React.PureComponent<IProps> {
  handleGoBack = () => store.dispatch<IDESELECT_USER>( {
    type: 'DESELECT_USER',
  } );
  render () {
    let
      {
        props: {
          albums,
          user,
        },
        handleGoBack,
      } = this;
    return <Panel 
      title={user.name}
      iconName='list'
      onGoBack={handleGoBack}
      className='Albums-List'
    >
      {
        albums.map( album => <Album
          key={album.id}
          album={album}
        /> )
      }
    </Panel>;
  }
}