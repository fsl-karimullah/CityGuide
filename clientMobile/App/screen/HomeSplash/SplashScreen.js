import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import images from '../../utils/image';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('intro');
    }, 20000);
  }, []);
  return (
    <View
      style={{
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={images.iconLanding}
        style={{
          width: 75,
          height: 75,
        }}
      />
      <Text
        style={{
          lineHeight: 26,
          position: 'absolute',
          bottom: 30,
          alignSelf: 'center',
        }}>
        9.9.1
      </Text>
    </View>
  );
};

export default SplashScreen;
