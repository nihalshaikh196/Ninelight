import React from 'react';
import { View , Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, List,ListItem} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { IMAGE } from './src/constants/image.js';

class CustomHeadeer extends React.Component {
  render() {
    let {title , isHome} = this.props
    return(
      <Header>
        <Left>
          {
            isHome?
            <Button transparent>
              <Icon name='menu' />
            </Button>:
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
            
          }
          
        </Left>
        <Body>
        <Title>{title}</Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon name='menu' />
          </Button> */}
        </Right>
      </Header>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="Home" isHome={true} />
        <View style={{  flex: 1,justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home</Text>
          <Button light onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <Text>Go to Home Screen...</Text>
          </Button>
        </View>
      </View>
    );
  }
}

class HomeScreenDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="HomeDetail" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Detail Screen</Text>
        </View>
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="Setting" isHome={true} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings</Text>
          <Button light onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <Text>Go to Settings Screen...</Text>
          </Button>
        </View>
      </View>
    );
  }
}

class SettingScreenDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="SettingDetail" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Setting Detail Screen</Text>
        </View>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="Profile" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
        </View>
      </View>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <CustomHeadeer title="Search" navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search Screen</Text>
        </View>
      </View>
    );
  }
}

class SideMenu extends React.Component{
  render() {
    return(
      <SafeAreaView style={{flax: 1}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={IMAGE.ICON_USER_DEFAULT}
            style={{height: 120, width: 120, borderRadius: 60}}
          />
        </View>
        <ScrollView>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('profile')}>
              <Text>Profile</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('search')}>
              <Text> Search </Text>
            </ListItem>
          </List>
        </ScrollView>

      <List>
        <ListItem noBorder>
          <Text> Logout </Text>
        </ListItem>
      </List>

      </SafeAreaView>
    )
  }
}

const navOptionHandler = (navigation) => ({
  header: null
})

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler
  },
  HomeDetail: {
    screen: HomeScreenDetail,
    navigationOptions: navOptionHandler
  }
})

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: navOptionHandler
  },
  SettingDetail: {
    screen: SettingScreenDetail,
    navigationOptions: navOptionHandler
  }
})


const MainTabs = createBottomTabNavigator({
  Home: 
  {
    screen:HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      )
    }
  },
  Settings:
  {
    screen:SettingStack,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_USER_DEFAULT}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      )
    }
  },
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  }
}, {initialRouteName: 'Home'} )

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }
)

export default createAppContainer(appDrawer);
