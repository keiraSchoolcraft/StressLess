import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class EyeMovementIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Eye movement intro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
})

export default EyeMovementIntroScreen