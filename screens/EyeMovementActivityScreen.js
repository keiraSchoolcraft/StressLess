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

{/* <Image source={require('./assets/images/example.png')} /> */}
class EyeMovementActivityScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>eye movement activity screen</Text>
        {/* <Image source={pic} style={{width: 193, height: 110}}/> */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('EyeMovementOutro')}
            title="Finished"
          />
          {/* <Image source={require('./assets/images/dots1a.png')} /> */}
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

export default EyeMovementActivityScreen