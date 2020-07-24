import React, { Component } from 'react';

import {  Button,StyleSheet, FlatList, Text, View, TouchableHighlight, ActivityIndicator, Platform} from 'react-native';


export default class Project extends Component {

    static navigationOptions={
      
      title: 'Profile',  
      
      headerStyle: {  
          backgroundColor: '#f4511e',  
      },  

      headerTitleStyle: {  
          fontWeight: 'bold',  
      }, 
      }

constructor(props)
  {
    super(props);

    this.state = { 
    isLoading: true,
    productName:'',
  }
  }
  componentDidMount() {
    
    return fetch('http://192.168.43.161/Ninelight/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
    onClickListener = (viewId) => {
      this.props.navigation.navigate(viewId);
    }

    render() {

        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
    
        return (
    
    <View style={styles.MainContainer}>
           <FlatList  

                 
              data={ this.state.dataSource }
    
        renderItem={({item}) => <Text style={styles.FlatListItemStyle} > {"\n"}{"\n"}FirstName:{item.first_name}     <Text style={styles.fonts}>{"\n"}{"\n"}LastName: {item.last_name}  </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}UserName: {item.user_name} </Text> 
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Email: {item.email_id} </Text>
                                                                                                                                          
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Phone No: {item.phone_no} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Shop Name: {item.shop_name} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Area: {item.area_street} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Village: {item.village} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}District: {item.district} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}City: {item.city} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Pincode: {item.pincode} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}State: {item.state} </Text>
                                                                                                                                            <Text style={styles.fonts}>{"\n"}{"\n"}Country: {item.country} </Text>
                                                                                                                                            </Text>}
              keyExtractor = { (item, index) => index.toString() }
              
             />

<TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=>this.onClickListener('Two')}>
              <Text style={styles.signUpText}>Edit</Text>
            </TouchableHighlight>


    </View>
          
        );
      }
    }

    const styles = StyleSheet.create({

      buttonContainer: {
        marginLeft: 90,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        width: 150,
        borderRadius: 30,
      },
      signupButton: {
        backgroundColor: "#FF8913",
      },
      signUpText: {
        color: 'white',
      },
        MainContainer :{
        
        flex: 1,
      backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        flex:1,

        margin: 10,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        
        },
        
        FlatListItemStyle: {

            padding: 10,
            fontSize: 20,
            height: 750,
          },

          fonts: {
          
            fontSize:20,
          },
        
        });

