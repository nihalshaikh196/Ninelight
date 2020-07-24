import React, {Component} from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default class Project extends Component {
  static navigationOptions = {
    title: 'Categories',
    headerStyle: {
      backgroundColor: '#f4511e',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() =>
              this.props.navigation.navigate('View_shopkeeper_orders', {
                no_id: 1,
              })
            }>
            <Text style={styles.signUpText}>Pending Orders</Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() =>
              this.props.navigation.navigate('View_shopkeeper_orders', {
                no_id: 2,
              })
            }>
            <Text style={styles.signUpText}>Confirmed Orders</Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() =>
              this.props.navigation.navigate('View_shopkeeper_orders', {
                no_id: 3,
              })
            }>
            <Text style={styles.signUpText}>Delivered Orders</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },

  buttonContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 170,
    borderRadius: 30,
    marginLeft: '25%',
  },
  signupButton: {
    backgroundColor: "#FF8913",
  },
  signUpText: {
    fontSize: 20,
    color: 'white',
  },
});