import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const ButtonRadius = ({
  customStyleContainer,
  title,
  onPress,
  isActive = false,
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={[styles.container, customStyleContainer]}>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.button,
              {backgroundColor: isActive ? '#00CEC9' : '#fff'},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: isActive ? 'white' : 'black'},
              ]}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: widthPercentageToDP('80%'),
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonRadius;
