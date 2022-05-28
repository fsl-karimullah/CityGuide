import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';

const CardMenu = ({title, subtitle, icon, onPress}) => {
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapper,
        tailwind('bg-white flex-row mb-3 px-3 py-4 rounded-xl border'),
      ]}>
      <Image
        source={icon}
        style={[
          {
            height: 50,
            width: 50,
          },
          tailwind('rounded-t-lg self-center'),
        ]}
      />
      <View style={tailwind('pl-3 self-center')}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subTitle]}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#eee',
    width: widthPercentageToDP('95%'),
  },
  title: {
    fontSize: 18,

    color: 'black',
  },
  subTitle: {
    fontSize: 12,

    color: 'black',
    opacity: 0.75,
    width: widthPercentageToDP('70%'),
  },
});
