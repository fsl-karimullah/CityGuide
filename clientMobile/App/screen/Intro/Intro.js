import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: wp('80%'),
    height: hp('34%'),
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: wp('4%'),
  },
  title: {
    fontSize: wp('5%'),
    color: '#555',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 1,
    title: 'Plan Your Trip',
    text: 'Get rid of your confusion when .\nyou want to travel',
    image: require('../../assets/Image/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Find a good place using this app',
    text: 'This app makes you easily find a place.\nYou can search by name, type, and location',
    image: require('../../assets/Image/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Enjoy your trip',
    text: 'You can enjoy your trip with your friends.\nYou can also share your trip with your friends',
    image: require('../../assets/Image/3.png'),
    backgroundColor: '#22bcb5',
  },
];

const Intro = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <SafeAreaView style={styles.slide}>
        <StatusBar backgroundColor={'transparent'} />
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </SafeAreaView>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="swapright" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="checkmark-done-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={() => navigation.navigate('HomeSplash')}
        />
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      dotStyle={{backgroundColor: '#eee'}}
      activeDotStyle={{backgroundColor: '#007aff'}}
      renderNextButton={renderNextButton}
    />
  );
};

export default Intro;
