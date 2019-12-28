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
        <Text>
            In this activity, you will be asked to apply tension to certain areas
            of your body, starting from the toes and working up to the face.
            Each application of tension should last 10s, with 20s rest intervals in between.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('MuscleTensionActivity')}
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

export default MuscleTensionIntroScreen