import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from './Menu_Distributor';
import Dashboard from './Dashboard_Distributor';
import Signup from '../screens/Signup';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Products';
import View_User from '../screens/View_User';
import View_profile from '../screens/PROFILE/View_profile';
import Edit_profile from '../screens/PROFILE/Edit_profile';
import Order_Category from '../screens/Order_Category';
import Order_Product from '../screens/Order_Product';
import Order_List from '../screens/Order_List';
import View_Cart from '../screens/View_Cart';

import View_orders_mains from '../screens/order_distributors/View_orders_mains';
import View_orders_distributors from '../screens/order_distributors/View_orders_distributors';
import View_shopkeeper_list from '../screens/order_distributors/View_shopkeeper_list';
import View_confirmed_order from '../screens/order_distributors/View_confirmed_order';
import View_accepted_order from '../screens/order_distributors/View_accepted_orders';
import View_shop_orders from '../screens/order_distributors/View_shopkeeper_orders_to_distributors';
import View_my_orders from '../screens/order_distributors/View_my_orders';
import View_my_orders2 from '../screens/order_distributors/View_my_orders2';

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
    View_User: {
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

    View_orders_distributors: {
      screen: View_orders_distributors,
      navigationOptions: {
        header: null,
      },
    },

    View_shopkeeper_list: {
      screen: View_shopkeeper_list,
      navigationOptions: {
        header: null,
      },
    },

    View_confirmed_order: {
      screen: View_confirmed_order,
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

    View_shop_orders: {
      screen: View_shop_orders,
      navigationOptions: {
        header: null,
      },
    },

    View_orders_mains: {
      screen: View_orders_mains,
      navigationOptions: {
        header: null,
      },
    },

    Order_Category: {
      screen: Order_Category,
      navigationOptions: {
        header: null,
      },
    },
    Order_Product: {
      screen: Order_Product,
      navigationOptions: {
        header: null,
      },
    },
    Order_List: {
      screen: Order_List,
      navigationOptions: {
        header: null,
      },
    },
    View_Cart: {
      screen: View_Cart,
      navigationOptions: {
        header: null,
      },
    },

    View_my_orders: {
      screen: View_my_orders,
      navigationOptions: {
        header: null,
      },
    },

    View_my_orders2: {
      screen: View_my_orders2,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Menu',
  },
);
