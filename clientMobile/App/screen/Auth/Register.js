import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';
import ButtonRadius from '../../components/Button/ButtonRadius';
import Input from '../../components/Input/Input';
import images from '../../utils/image';

const Register = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
  const tailwind = useTailwind();
  return (
    <ScrollView style={tailwind('flex bg-white')}>
      <SafeAreaView style={[tailwind('h-full ')]}>
        <View style={tailwind('flex mt-20')}>
          <Image
            source={images.loginIcon}
            style={[tailwind('self-center '), styles.iconLogin]}
          />
          <Text style={[tailwind('text-black self-center'), styles.textTitle]}>
            Register
          </Text>
        </View>

        <View style={tailwind('my-5 mx-10')}>
          <Input title={'Username'} placeholder="Username" />
          <Input
            title={'Email'}
            placeholder="Email"
            onchangeText={onChangeEmail}
          />
          <Input
            title={'Password'}
            placeholder="Password"
            onchangeText={onChangePassword}
            isSecureTextEntry={!isShowPassword}
            isIconRight={true}
            onPressIconRight={() => setisShowPassword(!isShowPassword)}
            imageIconRight={
              isShowPassword ? images.hidePassword : images.viewPassword
            }
          />
          <Input
            title={'Confirm Password'}
            placeholder="Confirm Password"
            isSecureTextEntry={!isShowConfirmPassword}
            isIconRight={true}
            onPressIconRight={() =>
              setisShowConfirmPassword(!isShowConfirmPassword)
            }
            imageIconRight={
              isShowPassword ? images.hidePassword : images.viewPassword
            }
          />
        </View>
        <ButtonRadius
          title="Register"
          isActive={true}
          customStyleContainer={tailwind('')}
        />
      </SafeAreaView>
    </ScrollView>
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
});
export default Register;
