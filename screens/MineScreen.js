import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View, StyleSheet, Alert } from 'react-native';

// import HomeScreen from './screens/HomeScreen';

export default class MineScreen extends React.Component {
  static navigationOptions = {
    // title: 'Mine',
    header: null
  };
  
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  _handleBackHome = () => {
    console.log(this.props);
    
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.mineContainer}>
        <Text>----------- Current Scene: {this.props.title} -----------</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
        <Text>----------- Tap back button -----------</Text>
        <Button
          title="Tap me back"
          onPress={this._handleBackHome}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

