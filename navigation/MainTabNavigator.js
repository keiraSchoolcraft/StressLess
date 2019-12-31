import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';

import BreathingIntroScreen from '../screens/BreathingIntroScreen';
import BreathingActivityScreen from '../screens/BreathingActivityScreen';
import BreathingOutroScreen from '../screens/BreathingOutroScreen';

import MuscleTensionIntroScreen from '../screens/MuscleTensionIntroScreen';
import MuscleTensionActivityScreen from '../screens/MuscleTensionActivityScreen';
import MuscleTensionOutroScreen from '../screens/MuscleTensionOutroScreen';

import EyeMovementIntroScreen from '../screens/EyeMovementIntroScreen';
import EyeMovementActivityScreen from '../screens/EyeMovementActivityScreen';
import EyeMovementOutroScreen from '../screens/EyeMovementOutroScreen'

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,

    BreathingIntro: BreathingIntroScreen,
    BreathingActivity: BreathingActivityScreen,
    BreathingOutro: BreathingOutroScreen,

    MuscleTensionIntro: MuscleTensionIntroScreen,
    MuscleTensionActivity: MuscleTensionActivityScreen,
    MuscleTensionOutro: MuscleTensionOutroScreen,

    EyeMovementIntro: EyeMovementIntroScreen,
    EyeMovementActivity: EyeMovementActivityScreen,
    EyeMovementOutro: EyeMovementOutroScreen,

  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
