import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
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
      style={[tailwind('my-2 '), customStyleContainer]}>
      <View style={tailwind('flex flex-row items-start w-full')}>
        <Image
          source={imgSrc}
          style={[
            tailwind('mx-5 rounded-lg'),
            {
              width: widthPercentageToDP('25%'),
              height: 75,
              resizeMode: 'contain',
            },
            customStyleImg,
          ]}
        />
        <View
          style={[
            tailwind('flex flex-col self-center'),
            customStyleContainerText,
            {width: wp('60%')},
          ]}>
          <Text
            style={[
              tailwind('text-black'),
              {fontSize: 16, fontFamily: 'Inter-Bold'},
              styles.textTitle,
            ]}>
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
          <View style={tailwind('flex justify-between flex-row items-center')}>
            <View style={tailwind('flex flex-row hidden')}>
              {isLocation ? (
                <Image
                  source={images.locationPinGreen}
                  style={tailwind('w-3 h-3 mr-3 self-center')}
                />
              ) : (
                <Image
                  source={images.StarIconGreen}
                  style={tailwind('w-4 h-4 mr-3 self-center')}
                />
              )}
              <Text
                style={[
                  tailwind(' text-black'),
                  {fontFamily: 'Inter-Bold'},
                  customStyleTextLoc,
                  styles.text,
                ]}>
                {rating}
              </Text>
            </View>
            {isIconRight ? (
              <View style={tailwind('flex flex-row mx-4')}>
                <TouchableOpacity
                  style={tailwind('bg-gray-200 mx-1 rounded-full p-2')}>
                  <Image source={imgSrcIcon} style={tailwind('w-3 h-3')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tailwind('bg-gray-200 mx-1 rounded-full p-2')}>
                  <Image source={imgSrcIcon2} style={tailwind('w-3 h-3')} />
                </TouchableOpacity>
              </View>
            ) : null}
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
    fontSize: widthPercentageToDP('4%'),
    lineHeight: 26,
  },
});
