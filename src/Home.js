
import React, { Component } from 'react';

class Home extends Component {
  render() {
    const imgStyle = {
      width: '30%',
      height: '50%',
      //objectFit: 'cover'
    };

    return (
      <div>
        <h1>Welcome</h1>

        <img src="img/bank.jpg" style={imgStyle} />
        </div>
        
    );
  
        

  }
}

export default Home;
