import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../utils/image';
import {useTailwind} from 'tailwind-rn/dist';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ButtonRadius from '../../components/Button/ButtonRadius';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../utils/colors';
import TitleWithButton from '../../components/Title/TitleWithButton';
const DetailPlace = ({navigation}) => {
  const tailwind = useTailwind();
  const [isSaved, setisSaved] = useState(false);
  const [dataService, setdataService] = useState([
    {id: 1, name: 'Coffee Menus'},
    {id: 2, name: 'Wifi'},
    {id: 3, name: 'Parking'},
    {id: 4, name: 'Restaurant'},
    {id: 5, name: 'Coffee Menus'},
    {id: 6, name: 'Wifi'},
    {id: 7, name: 'Parking'},
  ]);
  return (
    <SafeAreaView style={tailwind('bg-white flex-1')}>
      <ScrollView>
        <View style={tailwind('m-5')}>
          <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
          <ImageBackground
            source={images.grandPadis}
            imageStyle={{borderRadius: 10}}
            style={[tailwind('self-center flex-wrap'), styles.placeImage]}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                  tailwind('bg-white p-3 rounded-xl absolute m-5'),
                  {zIndex: 9999, opacity: 0.9},
                ]}>
                <Image source={images.ArrowBack} style={tailwind('w-5 h-5')} />
              </TouchableOpacity>
            </View>
            <View
              style={[
                tailwind('flex-row flex absolute self-center'),
                {bottom: -40},
              ]}>
              <View
                style={[
                  tailwind('bg-gray-100 py-3 px-2 mx-2 rounded-xl'),
                  {width: widthPercentageToDP(50), opacity: 0.9},
                ]}>
                <Text style={tailwind('text-xl text-black font-bold')}>
                  Grand Padis Bondowoso
                </Text>
                <View style={tailwind('flex-row')}>
                  <Image
                    source={images.locationIcon}
                    style={[tailwind('mr-1 self-center'), styles.icon]}
                  />
                  <Text style={tailwind('text-black self-center font-bold')}>
                    Bondowoso, Jatim
                  </Text>
                </View>
              </View>
              <View
                style={[
                  tailwind('bg-gray-100 py-3 px-2 mx-2 rounded-xl'),
                  {width: widthPercentageToDP(20), opacity: 0.9},
                ]}>
                <View style={tailwind('self-center flex-row')}>
                  <Text
                    style={[
                      tailwind('text-white rounded p-2 font-bold'),
                      {
                        backgroundColor: COLOR_PRIMARY,
                        fontSize: 14,
                      },
                    ]}>
                    Event
                  </Text>
                </View>
                <Text style={tailwind('text-black self-center')}>Here</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={tailwind('mx-3 mt-10')}>
          <View>
            <TitleWithButton
              customStyleContainer={tailwind('m-0')}
              title={'Services'}
              customStyleText={{color: COLOR_SECONDARY}}
            />
            <View style={tailwind('')}>
              <FlatList
                data={dataService}
                numColumns={3}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View
                    style={[tailwind('mt-2 flex-1 flex-row ')]}
                    key={item.id}>
                    <Text style={tailwind('font-bold text-black')}>
                      {item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={tailwind('mt-5')}>
            <TitleWithButton
              customStyleContainer={tailwind('m-0')}
              title={'About'}
              customStyleText={{color: COLOR_SECONDARY}}
            />
            <View>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
          <View style={tailwind('mt-5')}>
            <TitleWithButton
              customStyleContainer={tailwind('m-0')}
              title={'Event'}
              customStyleText={{color: COLOR_SECONDARY}}
            />
            <View>
              <Text style={styles.text}>
                Ada pernikahan Nanda Anubis, cepat datang, walaupun tidak di
                undang !!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[tailwind('m-4 flex-row justify-between')]}>
        <View style={tailwind('flex-row')}>
          <TouchableOpacity
            onPress={() => setisSaved(!isSaved)}
            style={tailwind('bg-gray-200 p-3  rounded-full')}>
            <Image
              style={[tailwind(), styles.iconBottom]}
              source={isSaved ? images.savedActive : images.saveGreenIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('bg-gray-200 mx-4 p-3 rounded-full')}>
            <Image
              style={[tailwind(), styles.iconBottom]}
              source={images.locationIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={tailwind('self-center')}>
          <ButtonRadius
            customStyleButton={{
              width: widthPercentageToDP('40%'),
            }}
            isActive
            title="Share"
            onPress={() => Alert.alert('Belom', 'Masih belom gannn')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailPlace;

const styles = StyleSheet.create({
  placeImage: {
    width: widthPercentageToDP(95),
    height: heightPercentageToDP(50),
    resizeMode: 'cover',
  },
  icon: {
    width: widthPercentageToDP(3),
    height: heightPercentageToDP(3),
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  iconBottom: {
    width: widthPercentageToDP(8),
    height: heightPercentageToDP(4),
    resizeMode: 'contain',
  },
});
