import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import images from '../../utils/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const GolfCourseCard = ({
  titlePlace,
  placeAddress,
  rating,
  imgSrc,
  index,
  onPress,
  customStyleContainer,
  customStyleImg,
  customStyleContainerText,
  imgSrcIcon,
  imgSrcIcon2,
  isIconRight = false,
  isLocation = false,
  customStyleTextLoc,
}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      onPress={onPress}
      key={index}
      style={[
        tailwind('my-2 bg-white rounded-xl shadow-lg self-center m-5'),
        customStyleContainer,
        {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        },
      ]}>
      <View style={tailwind('flex items-start ')}>
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}
          source={imgSrc}
          style={[
            tailwind(''),
            {
              width: widthPercentageToDP('90%'),
              height: widthPercentageToDP('50%'),
              resizeMode: 'cover',
            },
            customStyleImg,
          ]}>
          <View style={tailwind('self-end ')}>
            <View style={tailwind('')}>
              <TouchableOpacity
                style={[
                  tailwind('bg-white p-2 rounded-full m-2'),
                  {zIndex: 9999},
                ]}>
                <Image source={imgSrcIcon} style={tailwind('w-7 h-7')} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={[
            tailwind('flex flex-row py-5 px-2'),
            customStyleContainerText,
          ]}>
          <View>
            <Text style={[tailwind('text-black font-bold '), styles.textTitle]}>
              {titlePlace}
            </Text>
            <Text
              style={[
                tailwind('text-black'),
                {fontSize: 14, fontFamily: 'Inter-Regular'},
                styles.text,
              ]}>
              {placeAddress}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GolfCourseCard;
const styles = StyleSheet.create({
  text: {
    fontSize: widthPercentageToDP('3.5%'),
    lineHeight: 26,
  },
  textTitle: {
    fontSize: widthPercentageToDP('6%'),
  },
});
