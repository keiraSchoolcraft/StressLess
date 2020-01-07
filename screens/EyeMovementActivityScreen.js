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

const cycleInterval = 2
const maxCycles = 45
class ShowTime extends React.Component {
    render() {
      return (
        <View>
          <Text>{this.props.pics} {this.props.currentTime}</Text>
        </View>
      );
    }
  }
  
  class DotPictureArray extends React.Component {
    render () {
      let pics = [
        '../assets/images/dots1a.png',
        '../assets/images/dots2a.png',
        '../assets/images/dots3a.png',
        '../assets/images/dots4a.png',
        '../assets/images/dots5a.png',
        '../assets/images/dots6a.png',
        '../assets/images/dots7a.png',
        '../assets/images/dots8a.png',
        '../assets/images/dots9a.png',
        '../assets/images/dots10a.png',
        '../assets/images/dots11a.png',
        '../assets/images/dots12a.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/dots1b.png',
        '../assets/images/dots2b.png',
        '../assets/images/dots3b.png',
        '../assets/images/dots4b.png',
        '../assets/images/dots5b.png',
        '../assets/images/dots6b.png',
        '../assets/images/dots7b.png',
        '../assets/images/dots8b.png',
        '../assets/images/dots9b.png',
        '../assets/images/dots10b.png',
        '../assets/images/dots11b.png',
        '../assets/images/dots12b.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/blank.png',
        '../assets/images/dots1c.png',
        '../assets/images/dots2c.png',
        '../assets/images/dots3c.png',
        '../assets/images/dots4c.png',
        '../assets/images/dots5c.png',
        '../assets/images/dots6c.png',
        '../assets/images/dots7c.png',
        '../assets/images/dots8c.png',
        '../assets/images/dots9c.png',
        '../assets/images/dots10c.png',
        '../assets/images/dots11c.png',
        '../assets/images/dots12c.png',
      ]
  
      return (
        <Image source={pics[index]}/>
      )
    }
  }
class EyeMovementActivityScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentCycle: 0,
          timeInCycle: 0,
          timeOverall: 0,
        }
      }
    
      componentDidMount() {
        this.interval = setInterval(() => {
          this.nextTick()
        }, 1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      nextTick() {
        if (this.state.currentCycle >= maxCycles) {
            clearInterval(this.interval)
            console.log('should navigate')
            this.props.navigation.navigate('EyeMovementOutro')
            console.log('did navigate')
        } else {
            let timeOverall = this.state.timeOverall
            this.setState(previousState => (
                {
                    currentCycle: Math.trunc(timeOverall / cycleInterval),
                    timeInCycle: timeOverall % cycleInterval + 1,
                    timeOverall: timeOverall + 1
                }
            ));
            console.log(this.state);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Eye Movement</Text>

                <View style={styles.wrapper}>
                    <DotPictureArray currentCycle={this.state.currentCycle} />
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49f',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 3,
        textAlign: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    title: {
        flex: 1,
        fontSize: 28,
        padding: 20,
        textAlign: 'center',
    },
    wrapper: {
        padding: 10,
        fontSize: 30,
    },
})

export default EyeMovementActivityScreen