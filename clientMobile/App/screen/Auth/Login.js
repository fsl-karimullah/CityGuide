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
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTailwind} from 'tailwind-rn';
import ButtonRadius from '../../components/Button/ButtonRadius';
import Input from '../../components/Input/Input';
import images from '../../utils/image';

const Login = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState(null);
  const tailwind = useTailwind();
  const [isShowPassword, setisShowPassword] = useState(false);
  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <View style={tailwind('flex mt-36')}>
        <Image
          source={images.loginIcon}
          style={[tailwind('self-center '), styles.iconLogin]}
        />
        <Text style={[tailwind('text-black self-center'), styles.textTitle]}>
          Log In
        </Text>
      </View>
      <View style={tailwind('my-5 mx-10')}>
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
        <TouchableOpacity>
          <Text style={[tailwind('text-blue-500 font-bold')]}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonRadius
        title="Login"
        isActive={true}
        onPress={() => navigation.navigate('Homepage')}
        customStyleContainer={tailwind('mt-5')}
      />
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
});
export default Login;
