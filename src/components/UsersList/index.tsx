import React from 'react';
import Panel from 'app/components/Panel';
import User from 'app/components/User';
import { IUser } from 'app/types/api';
import './style';

interface IProps {
  users: IUser[];
}

export default class UsersLists extends React.PureComponent<IProps> {
  render () {
    let
      {
        props: {
          users,
        },
      } = this;
    return <Panel 
      title='Пользователи'
      iconName='home'
      className='Users-List'
    >
      {
        users.map( user => <User
          key={user.id}
          user={user}
        /> )
      }
    </Panel>;
  }
}