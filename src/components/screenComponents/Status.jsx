import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Status = ({route, navigation}) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const {name, image} = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    return () => clearTimeout(timer);
  }, []);

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          backgroundColor: 'gray',
          height: 3,
          width: '93%',
          borderWidth: 1,
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            width: progressAnimation,
            height: '100%',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          position: 'absolute',
          width: '90%',
          top: 12,
          left: 0,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              paddingLeft: 10,
            }}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{
                fontSize: 20,
                color: 'white',
                opacity: 0.6,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={image}
        style={{
          width: '100%',
          height: 500,
          position: 'absolute',
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
        }}>
        <TextInput
          placeholder="send message"
          placeholderTextColor="white"
          style={{
            width: '85%',
            height: 50,
            paddingLeft: 20,
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            fontSize: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="navigation"
            style={{
              fontSize: 30,
              color: 'white',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
