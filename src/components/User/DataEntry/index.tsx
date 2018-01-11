import React from 'react';
import './style';

interface IProps {
  iconName?: string;
  title?: string;
  description: React.ReactNode;
}

export default class UserDataEntry extends React.Component<IProps> {
  render () {
    let
      {
        props: {
          iconName,
          children,
          title,
          description,
        },
      } = this;

    return <tr 
      className='User-Data-Entry'
      title={title}
    >
      <td className='User-Data-Entry__description'>{description}</td>

      <td className='User-Data-Entry__content'>{children}</td>
    </tr>;
  }
}