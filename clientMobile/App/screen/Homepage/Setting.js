import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ButtonWithIcon from '../../components/Button/ButtonWithIcon';
import {useTailwind} from 'tailwind-rn/dist';
import images from '../../utils/image';
const Setting = ({navigation}) => {
  const tailwind = useTailwind();
  const [isToggle, setisToggle] = useState(false);
  return (
    <View>
      <View style={tailwind('m-3')}>
        <ButtonWithIcon
          title={'Profile'}
          onPress={() => navigation.navigate('Profile')}
          imageLeft={images.userImg}
          imageRight={images.arrowRightBtn}
        />
      </View>
      <View style={tailwind('m-3')}>
        <ButtonWithIcon
          title={'About'}
          onPress={() => setisToggle(!isToggle)}
          imageLeft={images.settingActive}
          imageRight={images.arrowRightBtn}
        />
        {isToggle ? (
          <View>
            <Text style={tailwind('text-center m-5')}>
              This app was maded by our team, and we made it with love, VER
              9.9.1
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
