import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';




class MainActivity extends Component {

  static navigationOptions =
  {
     title: 'MainActivity',
  };

constructor(props) {

   super(props)

   this.state = {

     TextInput_user_name: '',
     TextInput_user_PhoneNumber: '',
     TextInput_user_Email: '',

   }

 }

 InsertuserRecordsToServer = () =>{

      fetch('InsertuserData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        name : this.state.TextInput_user_name,

        phone_no : this.state.TextInput_user_PhoneNumber,

        email_id: this.state.TextInput_user_Email

      })

      }).then((response) => {
          return response.json();
      })
          .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);

          }).catch((error) => {
            console.error(error);
          });

}

 GoTo_Show_userList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Second');
    
  }

 render() {
   return (

<View style={styles.MainContainer}>


       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> 
            user Registration Form 
        </Text>
 
       <TextInput
         
         placeholder="Enter user Name"

         onChangeText={ TextInputValue => this.setState({ TextInput_user_name : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Enter user Phone Number"

         onChangeText={ TextInputValue => this.setState({ TextInput_user_PhoneNumber : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         placeholder="Enter user Email"

         onChangeText={ TextInputValue => this.setState({ TextInput_user_Email : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertuserRecordsToServer} >

        <Text style={styles.TextStyle}> INSERT user RECORD TO SERVER </Text>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_userList_Activity_Function} >

        <Text style={styles.TextStyle}> SHOW ALL INSERTED user RECORDS IN LISTVIEW </Text>

      </TouchableOpacity>
 

</View>
           
   );
 }
}

class ShowuserListActivity extends Component {

  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }

  static navigationOptions =
  {
     title: 'ShowuserListActivity',
  };

  componentDidMount() {
    
       return fetch('ShowAllusersList.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
    
     GetuserIDFunction=(name, phone_no, email_id)=>{

          this.props.navigation.navigate('Third', { 

            NAME : name,
            PHONE_NUMBER : phone_no,
            EMAIL : email_id

          });

     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: .5,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
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
   
        <View style={styles.MainContainer_For_Show_userList_Activity}>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
            renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

                      onPress={this.GetuserIDFunction.bind(
                        this, 
                         rowData.name,  
                         rowData.phone_no, 
                         rowData.email_id
                         )} > 

                      {rowData.name} 
                      
                      </Text> }
   
          />
   
        </View>
      );
    }

}

class EdituserRecordActivity extends Component {
  
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         TextInput_user_name: '',
         TextInput_user_PhoneNumber: '',
         TextInput_user_Email: '',
    
       }
    
     }

     componentDidMount(){

      // Received user Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_user_name: this.props.navigation.state.params.NAME,
        TextInput_user_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
        TextInput_user_Email: this.props.navigation.state.params.EMAIL,
      })

     }
  
    static navigationOptions =
    {
       title: 'EdituserRecordActivity',
    };

    UpdateuserRecord = () =>{
      
            fetch('UpdateuserRecord.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      

              name : this.state.TextInput_user_name,
              phone_no : this.state.TextInput_user_PhoneNumber,
              email_id: this.state.TextInput_user_Email
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
      
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                });
      
      }


    DeleteuserRecord = () =>{
        
          fetch('DeleteuserRecord.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            name : this.state.TextInput_user_name
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
        
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
        
          }).catch((error) => {
             console.error(error);
          });

          this.props.navigation.navigate('First');

      }

    render() {

      return (
   
   <View style={styles.MainContainer}>
   
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit user Record Form </Text>
    
          <TextInput
            
            placeholder="user Name Shows Here"
            
            value={this.state.TextInput_user_name}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_user_name : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
   
         <TextInput
            
            placeholder="user Phone Number Shows Here"

            value={this.state.TextInput_user_PhoneNumber}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_user_PhoneNumber : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
   
            placeholder="user Email Shows Here"

            value={this.state.TextInput_user_Email}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_user_Email : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateuserRecord} >
   
            <Text style={styles.TextStyle}> UPDATE user RECORD </Text>
   
         </TouchableOpacity>
   
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteuserRecord} >
   
            <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
   
         </TouchableOpacity>
    
   
   </View>
              
      );
    }

}

const MyNewProject = createStackNavigator(

  {

    First: { screen: MainActivity },

    Second: { screen: ShowuserListActivity },

    Third: { screen: EdituserRecordActivity },

  });


  export default createAppContainer(MyNewProject);

const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_userList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#FF5722',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});