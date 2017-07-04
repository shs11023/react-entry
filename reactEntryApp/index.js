import React from 'react';
import {
  AppRegistry,
  View,
  Button,
  Text,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy1"
        />

        <Image source={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
              method: 'POST',
              headers: {
                Pragma: 'no-cache'
              },
              body: 'Your Body goes here'
            }}
            style={{width: 200, height: 200}} />

      </View>
    );
  }
}
class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Image source={require('./resources/profilepic.jpg')} style={{width: 80, height: 80}} />
      </View>
    );
  }
}

export default const BlindshopApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});
