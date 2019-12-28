import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

class EyeMovementIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>In this activity, there will be a dot that appears on the screen.
            You are going to use ONLY your eyes to follow the dot as it moves horizontally and vertically.
            Three variants of the activity will be shown, each lasting 24 seconds, making 12 eye movements.
            There will be a 10 second rest interval between each variant.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('EyeMovementActivity')}
            title="Start"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
})

export default EyeMovementIntroScreen