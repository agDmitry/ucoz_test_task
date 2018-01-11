import React from 'react';
import './style';

interface IProps {
  title: React.ReactNode,
  iconName?: string;
  onGoBack? (...args: any[]): any;
  className?: string;
}

export default class Panel extends React.Component<IProps> {
  render () {
    let
      {
        props: {
          iconName,
          title,
          children,
          onGoBack,
          className,
        },
      } = this;

    return <div className={`Panel${typeof className === 'string' ? ' ' + className : ''}`}>
      <div className='Panel__header'>
        {
          typeof iconName === 'string' &&
          <div className='Panel__header-icon-container'>
            <i className={`fa fa-${iconName}`}/>
          </div>
        }

        <div className='Panel__header-title-container'>{title}</div>

        {
          typeof onGoBack === 'function' &&
          <div 
            className='Panel__header-go-back-btn'
            title='Назад'
            onClick={onGoBack}
          >
            <i className='fa fa-arrow-left'/>
          </div>
        }
      </div>

      <div className='Panel__content'>{children}</div>
    </div>;
  }
}