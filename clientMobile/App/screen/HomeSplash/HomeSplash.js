import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../utils/image';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';
import ButtonRadius from '../../components/Button/ButtonRadius';
import axios from 'axios';
import {NETWORK_NGROK} from '../../utils/network';
const HomeSplash = ({navigation}) => {
  let tailwind = useTailwind();
  const getMoviesFromApiAsync = async () => {
    axios
      .get(`${NETWORK_NGROK}/api/places`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'transparent'} />
      <ImageBackground
        source={images.landingImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.child}>
          <View style={[tailwind(''), styles.childContainer]}>
            <View style={[tailwind('rounded'), styles.containerMiddleContent]}>
              <Image style={[styles.iconLanding]} source={images.iconLanding} />
              <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>City Guide App</Text>
                <Text style={styles.text}>
                  Welcome to CityGuide. App for guilding your travel
                </Text>
              </View>
            </View>
          </View>
          <View>
            <ButtonRadius
              title="Login"
              isActive={true}
              onPress={() => {
                navigation.navigate('Login');
              }}
              customStyleContainer={{
                position: 'absolute',
                bottom: widthPercentageToDP('30%'),
                alignSelf: 'center',
                zIndex: 99999,
              }}
            />
          </View>
          <View>
            <ButtonRadius
              title="Register"
              customStyleContainer={{
                position: 'absolute',
                bottom: widthPercentageToDP('15%'),
                alignSelf: 'center',
                zIndex: 99999,
              }}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMiddleContent: {
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: widthPercentageToDP('80%'),
    alignSelf: 'center',
    marginTop: heightPercentageToDP('10%'),
  },
  image: {
    justifyContent: 'center',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 25,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconLanding: {
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('35%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  childContainer: {
    flex: 1,
    zIndex: 1,
  },
  child: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
  },
  containerTitle: {
    position: 'absolute',
    alignSelf: 'center',
    top: heightPercentageToDP('25%'),
  },
});
export default HomeSplash;
