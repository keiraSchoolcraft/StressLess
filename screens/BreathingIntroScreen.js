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

class BreathingIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          In this activity you will be guided through a slow breathing pattern.
          You will be asked to inhale for 3s, then exhale for 3s - you will do this 15 times.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('BreathingActivity')}
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

export default BreathingIntroScreen