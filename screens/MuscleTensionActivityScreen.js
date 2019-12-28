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

class MuscleTensionActivityScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>muscle tension activity screen</Text>
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

export default MuscleTensionActivityScreen