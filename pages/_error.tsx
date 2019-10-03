import React, { Fragment } from 'react';
import Index from './index';
import '../css/index.scss';

class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  getResponse(statusCode: number) {
    switch (statusCode) {
      case 404:
        console.log('Rendering home');
        return <Index />;
        break;

      case 500:
        return <p>An error occurred on the server</p>;
        break;

      default:
        return <p>An error occurred on client</p>;
        break;
    }
  }

  render() {
    return <Fragment>{this.getResponse(this.props.statusCode)}</Fragment>;
  }
}

export default Error;
