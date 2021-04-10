import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';
import AppNavigator from './navigation/AppNavigator'
import theme, { ThemeContext } from './config/theme';
import Colors from './constants/Colors';

const _makeTheme = (type = 'light') => ({
  color: Colors,
  ...theme(type)
});
const dark = _makeTheme('dark');
const light = _makeTheme('light');

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    isLoadingComplete: false,
    hasHydrated: false,
    theme: 'light'
  };

  async loadFonts() {
    await Font.loadAsync({
      HelveticaNeueBold: require('./assets/fonts/HelveticaNeue-Bold.otf'),
      HelveticaNeueMedium: require('./assets/fonts/HelveticaNeue-Medium.otf'),
      HelveticaNeueLight: require('./assets/fonts/HelveticaNeue-Light.otf'),

    });
    this.setState({ fontsLoaded: true });
  }
  toggleTheme = () => {
    this.setState(
      ({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }),
      this._changeStatusBarStyle
    );
  };

  _changeStatusBarStyle = () => {
    StatusBar.setBarStyle(
      this.state.theme === 'light' ? 'default' : 'light-content'
    );
  };
  componentDidMount() {
    this.loadFonts();
    Platform.OS === 'ios' && this._changeStatusBarStyle();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <ThemeContext.Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          <ThemeProvider theme={this.state.theme === 'light' ? light : dark}>
            <AppNavigator />
          </ThemeProvider>
        </ThemeContext.Provider >
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}