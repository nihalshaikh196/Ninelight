import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            isloading: true,
            dateSource: null,
        }
    }

    componentDidMount () {
        return fetch('')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Navdeep</Text>
                <Text>Dadhania</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flax: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});