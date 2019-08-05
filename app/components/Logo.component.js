import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity
} from 'react-native';


const logoImage = require('../assets/images/eco-logo.png');

class Logo extends Component {

  goHome = () => {
      this.props.navigation.navigate('Products');
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goHome} style={{ paddingLeft: 10 }}>
          <Image source={logoImage} style={{width:32, height:32}}/>
      </TouchableOpacity>
    );
  }
}


export default Logo;
