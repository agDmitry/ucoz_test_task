import React from 'react';
import './style';

interface IProps {
  title: React.ReactNode;
}

export default class UserDataSection extends React.Component<IProps> {
  render () {
    let
      {
        props: {
          children,
          title,
        },
      } = this;

    return <div className='User-Data-Section'>
      <div className='User-Data-Section__title-container'>{title}</div>
      <table className='User-Data-Section__content'>
        <tbody>{children}</tbody>
      </table>
    </div>;
  }
}