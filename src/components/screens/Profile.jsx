import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';

const Circuls = () => {
  let numberofcircels = ['', '', '', '', '', '', '', '', '', ''];

  return (
    <>
      {numberofcircels.map((data, index) => {
        return (
          <View key={index}>
            {index === 0 ? (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  borderWidth: 1,
                  opacity: 0.7,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
              </View>
            ) : (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: 'black',
                  opacity: 0.1,
                  marginHorizontal: 5,
                }}></View>
            )}
          </View>
        );
      })}
    </>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <ProfileBody
        name="Mr Peobody"
        accountName="mr_peobody"
        profileImage={require('../../storage/images/userProfile.png')}
        followers="3.6M"
        following="35"
        post="458"
      />
      <ProfileButtons
        id={0}
        name="Mr Peobody"
        accountName="mr_peobody"
        profileImage={require('../../storage/images/userProfile.png')}
      />
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story HightLights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          <Circuls />
        </ScrollView>
        <BottomTabView />
      </View>
    </View>
  );
};

export default Profile;
