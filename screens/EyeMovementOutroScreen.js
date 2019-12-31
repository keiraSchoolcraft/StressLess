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
                <Text>Thanks for completing the eye movement activity!</Text>
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

export default EyeMovementOutroScreen