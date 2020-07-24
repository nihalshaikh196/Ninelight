import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from './Menu_Manufacturer';
import Dashboard from './Dashboard_Manufacturer';
import Signup from '../screens/Signup';
import Add_Product from '../screens/Add_Product';
import Add_Category from '../screens/Add_Category';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Products';
import View_User from '../screens/View_User';

import View_profile from '../screens/PROFILE/View_profile';
import Edit_profile from '../screens/PROFILE/Edit_profile';

import View_orders_main from '../screens/order_manufacturer/View_orders_main';
import View_distributor_list from '../screens/order_manufacturer/View_distributor_list';
import View_order_manufacturer from '../screens/order_manufacturer/View_order_manufacturer';
import View_accepted_order from '../screens/order_manufacturer/View_accepted_order';

export default createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: null,
      },
    },
    Dashboard: {
      screen: Dashboard,
      // navigationOptions:{
      //   header: null
      // },
    },
    Signup: {
      screen: Signup,
      // navigationOptions:{
      //   header: null
      // },
    },
    Add_Product: {
      screen: Add_Product,
      // navigationOptions:{
      //   header: null
      // },
    },
    Add_Category: {
      screen: Add_Category,
      // navigationOptions:{
      //   header: null
      // },
    },
    View_Category: {
      screen: View_Category,
      // navigationOptions:{
      //   header: null
      // },
    },
    View_Product: {
      screen: View_Product,
      // navigationOptions:{
      //   header: null
      // },
    },
    View_user: {
      screen: View_User,
      // navigationOptions:{
      //   header: null
      // },
    },

    View_profile: {
      screen: View_profile,
      navigationOptions: {
        header: null,
      },
    },

    Edit_profile: {
      screen: Edit_profile,
      navigationOptions: {
        header: null,
      },
    },

    View_distributor_list: {
      screen: View_distributor_list,
      navigationOptions: {
        header: null,
      },
    },

    View_order_manufacturer: {
      screen: View_order_manufacturer,
      navigationOptions: {
        header: null,
      },
    },

    View_accepted_order: {
      screen: View_accepted_order,
      navigationOptions: {
        header: null,
      },
    },

    View_orders_main: {
      screen: View_orders_main,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Menu',
  },
);
