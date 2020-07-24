import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform } from 'react-native';


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

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {

    return fetch('http://192.168.43.161/Ninelight/View_User.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({

          isLoading: false,
          dataSource: responseJson
        }, function () {

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  fileselector = (Id,user_id) => {
    if(Id==1){
      this.props.navigation.navigate('View_orders_distributors', {
        shopkeeper_id: user_id,
      })
    }
    else if(Id==2){
      this.props.navigation.navigate('View_confirmed_order', {
        shopkeeper_id: user_id,
        goal:1,
      })
    }

    else if(Id==3){
      this.props.navigation.navigate('View_accepted_order', {
        shopkeeper_id: user_id,
      })
    }

    else if(Id==4){
      this.props.navigation.navigate('View_confirmed_order', {
        shopkeeper_id: user_id,
        goal:2,
      })
    }
    
  }



  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",

          backgroundColor: "#ff8913",
        }}
      />
    );
  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    

    const { navigation } = this.props;  
      const file_id = navigation.getParam('no_id', 'NO-User'); 

    return (

      <View style={styles.MainContainer}>

        <FlatList

          data={this.state.dataSource}

          ItemSeparatorComponent={this.FlatListItemSeparator}

          renderItem={({ item }) => <Text style={styles.FlatListItemStyle} onPress={() =>
            this.fileselector(file_id,item.user_id)
          } > {item.first_name} {item.last_name}-{item.user_name}  </Text>}

          keyExtractor={(item, index) => index.toString()}

        />




      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,

  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },

});