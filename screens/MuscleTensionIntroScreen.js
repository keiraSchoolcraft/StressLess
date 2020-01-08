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

class MuscleTensionIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>
            In this activity, you will be asked to apply tension to certain areas
            of your body, starting from the toes and working up to the face.
            Each application of tension should last 10s, with 20s rest intervals in between.
        </Text>
        <Text style={styles.infoText}>
          At the end, you will be given a link to a survey.
          Please make note of your current stress level on a scale from 1-10.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('MuscleTensionActivity')}
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
    backgroundColor: '#49f',
  },
  buttonContainer: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  infoText: {
      flex: 4,
      padding: 30,
      fontSize: 20,
    //   textAlign: 'center',
  },
})

export default MuscleTensionIntroScreen