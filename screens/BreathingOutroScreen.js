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

class BreathingOutroScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}>Thanks for finishing the breathing activity!</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Take Me Home"
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
    flex: 2,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  infoText: {
      fontSize: 35,
      flex: 2,
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: 80,
  },
})

export default BreathingOutroScreen