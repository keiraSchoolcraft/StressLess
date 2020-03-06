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
        <Text style={styles.infoText}>In this activity, there will be a dot that appears on the screen.
            You are going to use ONLY your eyes to follow the dot as it moves horizontally and vertically.
            Three variants of the activity will be shown, each lasting 24 seconds, making 12 eye movements.
            There will be a 10 second rest interval between each variant.
        </Text>
        <Text style={styles.infoText}>
          At the end, you will be given a link to a survey.
          Please make note of your current stress level on a scale from 1-10.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('EyeMovementActivity')}
            title="Start"
            color={Platform.OS === 'ios' ? 'white' : '#49f'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43A386',
        padding: 30,
        justifyContent: 'space-evenly',
        // alignItems: 'center',
    },
    buttonContainer: {
        flex: 3,
        textAlign: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    title: {
        flex: 3,
        fontSize: 28,
        padding: 30,
        textAlign: 'center',
    },
    wrapper: {
        padding: 10,
        fontSize: 30,
    },
    infoText: {
        flex: 10,
        padding: 10,
        fontSize: 18,
        // textAlign: 'center',
    },
})

export default EyeMovementIntroScreen