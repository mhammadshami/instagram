import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;

  const ToastMessage = () => {
    ToastAndroid.show('Edit Successfully', ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic
            name="close-outline"
            style={{
              fontSize: 35,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Edit Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}>
          <Ionic
            name="checkmark"
            style={{
              fontSize: 35,
              color: '#2493D9',
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 20,
          alignItems: 'center',
        }}>
        <Image
          source={profileImage}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            color: '#3493d9',
          }}>
          Edit profile image
        </Text>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text style={{opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <Text style={{opacity: 0.5}}>Userame</Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493d9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#efefef',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493d9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#efefef',
          }}>
          Personal information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
