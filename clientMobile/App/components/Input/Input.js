import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';
import ButtonRadius from '../../components/Button/ButtonRadius';
import images from '../../utils/image';

const Input = ({
  placeholder,
  title,
  customStyleInput,
  onchangeText,
  value,
  isSecureTextEntry,
  isIconRight,
  onPressIconRight,
  imageIconRight,
  customStyleIconContainer,
  customStyleIcon,
  customStyleInputContainer,
  isError = false,
  errorMessage,
}) => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('')}>
      <View style={tailwind('my-5')}>
        <Text style={styles.titleInput}>{title}</Text>
        <View
          style={[tailwind('flex justify-center '), customStyleInputContainer]}>
          <TextInput
            style={[styles.input, customStyleInput]}
            onChangeText={onchangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={isSecureTextEntry}
          />
          {isIconRight ? (
            <TouchableOpacity
              onPress={onPressIconRight}
              style={[
                tailwind(''),
                styles.iconRightContainer,
                customStyleIconContainer,
              ]}>
              <Image
                source={imageIconRight}
                style={[tailwind(''), styles.iconRight, customStyleIcon]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {isError ? <Text style={styles.errorInput}>{errorMessage}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconLogin: {
    width: widthPercentageToDP('30%'),
    height: widthPercentageToDP('30%'),
  },
  textTitle: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
    marginTop: widthPercentageToDP('5%'),
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  titleInput: {
    fontSize: widthPercentageToDP('3%'),
    fontWeight: 'bold',
    color: 'black',
  },
  iconRight: {
    width: widthPercentageToDP('5%'),
    height: widthPercentageToDP('5%'),
  },
  iconRightContainer: {
    position: 'absolute',
    right: 0,
  },
  errorInput: {
    color: 'red',
    fontSize: widthPercentageToDP('3%'),
    marginTop: 5,
  },
});
export default Input;
