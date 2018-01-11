import React from 'react';
import store from 'app/store';
import {
  IRESET_REQUEST_STATUS,
} from 'app/store/types/actions';
import {
  IRequestStatus,
} from 'app/store/types';
import './style';

interface IProps {
  status: IRequestStatus;
}

export default class RequestStatus extends React.PureComponent<IProps> {
  handleClick = () => store.dispatch<IRESET_REQUEST_STATUS>( {
    type: 'RESET_REQUEST_STATUS',
  } );
  render () {
    let
      {
        props: {
          status: {
            msg,
            state,
          },
        },
        handleClick,
      } = this,
      icon = state === 'error' 
        ? 'fa-exclamation-triangle' 
        : 'fa-spinner fa-spin';

    return <div 
      className='Request-Status'
      onClick={
        state === 'error'
          ? handleClick
          : undefined
      }
    >
      <div className='Request-Status__content-wrapper'>
        <i className={`fa ${icon} Request-Status__state-icon`}/>
        <div className='Request-Status__msg'>{msg}</div>
      </div>
    </div>;
  }
}