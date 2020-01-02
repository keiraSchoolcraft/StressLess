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
        <Text style={styles.infoText}>
          In this activity you will be guided through a slow breathing pattern.
          You will be asked to inhale for 3s, then exhale for 3s - you will do this 15 times.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('BreathingActivity')}
            title="Start"
            color = 'white'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49f',
  },
  buttonContainer: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  infoText: {
    flex: 2,
    fontSize: 35,
    textAlign: 'center',
    padding: 30,
    flexShrink: 1,
  },
})

export default BreathingIntroScreen