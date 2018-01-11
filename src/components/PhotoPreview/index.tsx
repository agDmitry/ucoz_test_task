import React from 'react';
import Panel from 'app/components/Panel';
import { IPhoto } from 'app/types/api';
import { IDESELECT_PHOTO } from 'app/store/types/actions';
import store from 'app/store';
import './style';

interface IProps {
  photo: IPhoto;
}

export default class PhotoPreview extends React.PureComponent<IProps> {
  handleGoBack = () => store.dispatch<IDESELECT_PHOTO>( {
    type: 'DESELECT_PHOTO',
  } );
  render () {
    let
      {
        props: {
          photo,
        },
        handleGoBack,
      } = this;

    return <Panel
      title={photo.title}
      onGoBack={handleGoBack}
      iconName='file-image-o'
      className='Photo-Preview'
    >
      <img src={photo.url} alt={photo.title}/>
    </Panel>;
  }
}