import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from '../screens/Dashboard';
import Setting from '../screens/Setting';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import addItem from '../screens/addItems';
import addcategory from '../screens/addcategory';
import Menu from '../screens/Menu';
import Profile from '../screens/profile';
import ViewCategory from '../screens/ViewCategory';
import ViewItems from '../screens/ViewItems';
import ViewItem from '../screens/ViewItem';
import Order_two from '../screens/Order_two';
import Order_three from '../screens/Order_three';
import ViewCart from '../screens/ViewCart';

export default createStackNavigator(
  {
    Menu: {
      screen:Menu,
      navigationOptions:{
        header: null
      },
    },

    Profile: {
      screen:Profile,
      navigationOptions:{
        header: null
      },
    },
    ViewCart: {
      screen:ViewCart,
      navigationOptions:{
        header: null
      },
    },

    Dashboard: {
      screen:Dashboard,
      // navigationOptions:{
      //   header: null
      // },
    },
    Setting: {
      screen:Setting,
      navigationOptions:{
        header: null
      },
    },
    Signup: {
      screen:Signup,
      navigationOptions:{
        header: null
      },
    },
    Login: {
      screen:Login,
      navigationOptions:{
        header: null
      },
    },
    addItem: {
      screen:addItem,
      navigationOptions:{
        header: null
      },
    },
    addcategory: {
      screen:addcategory,
      navigationOptions:{
        header: null
      },
    },
   
    ViewCategory: {
      screen:ViewCategory,
      navigationOptions:{
        header: null
      },
    },


    ViewItems: {
      screen:ViewItems,
      navigationOptions:{
        header: null
      },
    },

    ViewItem: {
      screen:ViewItem,
      navigationOptions:{
        header: null
      },
    },


    Order_two: {
      screen:Order_two,
      navigationOptions:{
        header: null
      },
    },

    Order_three: {
      screen:Order_three,
      navigationOptions:{
        header: null
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);
