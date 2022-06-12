import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

const TitleWithButton = ({
  title,
  isButtonRight = false,
  customStyleContainer,
  customStyleText,
  onPressRight,
}) => {
  const tailwind = useTailwind();
  return (
    <View
      style={[tailwind('mx-3 flex-row justify-between'), customStyleContainer]}>
      <View style={tailwind('self-center')}>
        <Text
          style={[
            tailwind('font-bold tracking-widest text-2xl text-black'),
            customStyleText,
          ]}>
          {title}
        </Text>
      </View>
      {isButtonRight ? (
        <TouchableOpacity
          onPress={onPressRight}
          style={tailwind('self-center ')}>
          <Text
            style={[
              tailwind('text-lg tracking-widest font-bold'),
              {color: '#0C9955'},
            ]}>
            See all
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TitleWithButton;

const styles = StyleSheet.create({});
