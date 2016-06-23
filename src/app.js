import React from 'react';
import ReactDOM from 'react-dom';

class Dummy extends React.Component {
  render() {
    return (
      <h1>Hola mundo</h1>
    );
  }
}

ReactDOM.render(<Dummy />, document.getElementById('root'));
