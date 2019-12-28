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

class BreathingActivityScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>breathing activity screen</Text>
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

export default BreathingActivityScreen