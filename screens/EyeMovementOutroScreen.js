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
  Linking,
} from 'react-native';




class EyeMovementOutroScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}> Thanks for completing the eye movement activity!</Text>
                <Text style={styles.infoText}> Please take the Google Survey as linked below.</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Google Survey"
                        onPress={this._handleOpenWithLinking}
                        style={styles.button}
                        color={Platform.OS === 'ios' ? 'white' : '#49f'}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Take Me Home"
                        color={Platform.OS === 'ios' ? 'white' : '#49f'}
                    />
                </View>
            </View>
        );
    }
    _handleOpenWithLinking = () => {
        Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSeyAJ31zEabP8yR9jriO8l3HIW8gAQEKCDG7w92kA__HlBMhQ/viewform?usp=sf_link');
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49f',
      },
      buttonContainer: {
        flex: 5,
        textAlign: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
      },
      infoText: {
          fontSize: 25,
          flex: 1,
        //   textAlign: 'center',
          justifyContent: 'space-around',
          padding: 20,
      },
})

export default EyeMovementOutroScreen