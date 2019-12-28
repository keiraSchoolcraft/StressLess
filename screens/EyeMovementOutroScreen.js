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

class EyeMovementOutroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>eye movement outro screen</Text>
        {/* <Button
            onPress={() => this.props.navigation.navigate('BreathingOutro')}
            title="Finished"
          /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
//   buttonContainer: {
//     flex: 3,
//     textAlign: 'center',
//     justifyContent: 'space-around',
//     flexDirection: 'column',
//   },
})

export default EyeMovementOutroScreen