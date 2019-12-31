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

const cycleInterval = 10
const maxCycles = 7
class ShowTime extends React.Component {
    render() {
      return (
        <View>
          <Text>{this.props.label} {this.props.currentTime}</Text>
        </View>
      );
    }
  }
  
  class MuscleGuidanceArray extends React.Component {
    render () {
      let labels = [
        'Curl Toes',
        'Relax',
        'Relax',
        'Flex Calves',
        'Relax',
        'Relax',
        'Flex Hamstrings/Quads',
        'Relax',
        'Relax',
        'Flex Abdominal Muscles',
        'Relax',
        'Relax',
        'Make a fist',
        'Relax',
        'Relax',
        'Flex Biceps/Triceps',
        'Relax',
        'Relax',
        'Squeeze Shoulders to Ears',
        'Relax',
        'Relax',
        'Smile!'
      ]
  
      return (
        <Text>{labels[this.props.currentCycle]}</Text>
      )
    }
  }
class MuscleTensionActivityScreen extends React.Component {
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
            this.props.navigation.navigate('MuscleTensionOutro')
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
        <Text style={styles.title}>Muscle Tension Activity Screen</Text>
        {/* <View style={styles.wrapper}>
          <DoThing currentCycle={this.state.currentCycle} timeInCycle={this.state.timeInCycle} />
        </View> */}
        
        <View style={styles.wrapper}>
          <MuscleGuidanceArray currentCycle={this.state.currentCycle} />
        </View>

        {/* <View style={styles.wrapper}>
          <ShowTime label={'Current Cycle'} currentTime={this.state.currentCycle} />
        </View> */}

        <View style={styles.wrapper}>
          <ShowTime label={'Time in Cycle'} currentTime={this.state.timeInCycle} />
        </View>

        <View style={styles.wrapper}>
          <ShowTime label={'Time Overall'} currentTime={this.state.timeOverall} />
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
  title: {
      fontSize: 45,
  },
  buttonContainer: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
})

export default MuscleTensionActivityScreen