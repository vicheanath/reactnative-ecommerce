import * as React from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator'


export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      HelveticaNeueBold: require('./assets/fonts/HelveticaNeue-Bold.otf'),
      HelveticaNeueMedium: require('./assets/fonts/HelveticaNeue-Medium.otf'),
      HelveticaNeueLight: require('./assets/fonts/HelveticaNeue-Light.otf'),

    });
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <AppNavigator />
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}