// import React, {Component} from 'react';

// class Movies extends Component {


//   render() {
//     return (
      
//       <div>
//         <h1>Demo</h1>

//         {<img src="img/mobile.jfif"></img> }
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           alt="Mobile"
        
//       </div>

//     );
//   }
// }

// export default Movies;
import React, { Component } from 'react';

class Movies extends Component {
  render() {
    const imgStyle = {
      width: '30%',
      height: '50%',
      //objectFit: 'cover'
    };

    return (
      <div>
        <h1>Demo</h1>

        <img src="img/mobile.jfif" style={imgStyle} />
      </div>
    );
  }
}

export default Movies;
