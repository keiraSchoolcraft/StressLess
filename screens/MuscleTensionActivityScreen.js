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

class MuscleTensionActivityScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>muscle tension activity screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('MuscleTensionOutro')}
            title="Finished"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  buttonContainer: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
})

export default MuscleTensionActivityScreen