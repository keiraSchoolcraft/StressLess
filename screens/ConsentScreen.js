import React from 'react';
import{
    Button,
    Plaform,
    Text,
    View,
    Modal,
    Alert,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

class ConsentScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
            setModalVisible: true,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                }}>
                <View style={styles.wrapper}>
                    <View>
                        <Text style={styles.title}> Consent Form Required! </Text>
                        <Text style={styles.paragraph}>
                            You must provide a signed consent form to Keira. 
                            For purposes of ISEF, parental and student consent
                            must be provided in order to collect data from the 
                            study's participents.
                        </Text>
                        <Text style={styles.paragraph}>
                            You must be over the age of 13 to participate in this study.
                        </Text>
                        <Text style={styles.paragraph}>
                            If you are under the age of 18, you must have parental consent to participate in this study.
                        </Text>

                        <TouchableHighlight
                            onPress={() => {
                                this.setState({modalVisible: false})
                                this.props.navigation.navigate('Main')
                            }}>
                                <Text>I am over the age of 13 and have provided a signed consent form. (Click Me)</Text>
                        </TouchableHighlight>
                        <Text></Text>
                    </View>
                </View>
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#49f',
    },
    buttonContainer: {
      flex: 2,
      textAlign: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
    },
    wrapper: {
        padding: 10,
        fontSize: 30,
    },
    paragraph: {
        fontSize: 18,
        lineHeight: 22,
        paddingBottom: 20,
    },
    title: {
        fontSize: 28,
        padding: 20,
        textAlign: 'center',
    },
  })

  export default ConsentScreen