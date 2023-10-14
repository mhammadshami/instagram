import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

const Posts = () => {
  let squares = ['', '', '', '', ''];

  return (
    <ScrollView
      showVerticalScrollIndicator={false}
      style={
        {
          // width: '100%',
          // height: '100%',
        }
      }>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingVertical: 5,
          justifyContent: 'space-between',
        }}>
        {squares.map((data, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  width: 130,
                  height: 150,
                  marginVertical: 0.5,
                  backgroundColor: 'black',
                  opacity: 0.1,
                }}></View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View
      style={{
        width: '100%',
        height: 300,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {backgroundColor: 'black', height: 1.5},
          tabBarIcon: ({focused, colour}) => {
            let iconName;

            if (route.name === 'Posts') {
              iconName = focused ? 'apps-sharp' : 'apps-sharp';
              colour = focused ? 'black' : 'gray';
            } else if (route.name === 'Video') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              colour = focused ? 'black' : 'gray';
            } else if (route.name === 'Tags') {
              iconName = focused ? 'person' : 'person-outline';
              colour = focused ? 'black' : 'gray';
            }

            return <Ionic name={iconName} color={colour} size={22} />;
          },
        })}>
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Video" component={Posts} />
        <Tab.Screen name="Tags" component={Posts} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabView;

const styles = StyleSheet.create({});
