import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/Input/Input';
import images from '../../utils/image';
import TitleWithButton from '../../components/Title/TitleWithButton';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Card from '../../components/cards/Card';
import CardMenu from '../../components/cards/CardMenu';
import {COLOR_PRIMARY} from '../../utils/colors';
const Homepage = ({navigation}) => {
  const tailwind = useTailwind();
  const isEvent = false;
  const [dataTemp, setdataTemp] = useState([
    {
      id: 1,
      placeName: 'Grand Padis Hotel Bondowoso',
      Category: 'Hotel',
      image: images.grandPadis,
    },
    {
      id: 2,
      placeName: 'Pesen Kopi',
      Category: 'Cafetaria',
      image: images.grandPadis,
    },
    {
      id: 3,
      placeName: 'Puncak Pyramid',
      Category: 'Nature Tour',
      image: images.grandPadis,
    },
  ]);
  const [dataTemp2, setdataTemp2] = useState([
    {
      id: 1,
      placeName: 'Grand Padis Hotel Bondowoso',
      Category: 'Hotel',
      image: images.grandPadis,
      isEvent: false,
    },
    {
      id: 2,
      placeName: 'Pesen Kopi',
      Category: 'Cafetaria',
      image: images.grandPadis,
      isEvent: false,
    },
    {
      id: 3,
      placeName: 'Puncak Pyramid',
      Category: 'Nature Tour',
      image: images.grandPadis,
      isEvent: false,
    },
    {
      id: 4,
      placeName: 'Gelora Bondowoso',
      Category: 'Tour',
      image: images.grandPadis,
      isEvent: true,
    },
    {
      id: 5,
      placeName: 'Unej Bondowoso Porprov',
      Category: 'Tournament',
      image: images.grandPadis,
      isEvent: true,
    },
  ]);
  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <ScrollView>
        <View style={tailwind('m-5')}>
          <View>
            <Text style={tailwind('text-4xl text-black tracking-widest')}>
              Where do
            </Text>
            <Text
              style={[
                tailwind('text-4xl font-extrabold tracking-widest'),
                {color: '#0C9955'},
              ]}>
              you want to go ?
            </Text>
          </View>
          <View>
            <Input
              customStyleInput={[
                tailwind('rounded border pl-8 rounded-3xl border-gray-400'),
                {backgroundColor: '#f1f1f1'},
              ]}
              placeholder="Find a place to come"
              isIconRight={true}
              customStyleIconContainer={tailwind('mx-5')}
              imageIconRight={images.searchIcon}
            />
          </View>
        </View>
        <View>
          <TitleWithButton title="Category" />
          <View style={tailwind('my-5')}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={tailwind('mx-5')}>
                <Image
                  source={images.mountainsImg}
                  style={[tailwind(''), styles.imageIcon]}
                />
                <Text style={tailwind('my-2 self-center text-black font-bold')}>
                  Nature Tour
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tailwind('mx-5')}>
                <Image
                  source={images.cafeImg}
                  style={[tailwind(''), styles.imageIcon]}
                />
                <Text style={tailwind('my-2 self-center text-black font-bold')}>
                  Cafetaria
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tailwind('mx-5')}>
                <Image
                  source={images.villaImg}
                  style={[tailwind(''), styles.imageIcon]}
                />
                <Text style={tailwind('my-2 self-center text-black font-bold')}>
                  Villa
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tailwind('mx-5')}>
                <Image
                  source={images.hotelImg}
                  style={[tailwind(''), styles.imageIcon]}
                />
                <Text style={tailwind('my-2 self-center text-black font-bold')}>
                  Hotel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tailwind('mx-5')}>
                <Image
                  source={images.fitnesImg}
                  style={[tailwind(''), styles.imageIcon]}
                />
                <Text style={tailwind('my-2 self-center text-black font-bold')}>
                  Sport & Gym
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={tailwind('')}>
          <TitleWithButton title="Popular" isButtonRight />
          <View style={tailwind('m-4')}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataTemp}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('detailPlace')}
                  style={[
                    tailwind('flex flex-row flex-wrap m-2'),
                    {
                      borderRadius: 15,
                      overflow: 'hidden',
                    },
                  ]}>
                  <ImageBackground
                    resizeMode="cover"
                    source={item.image}
                    style={styles.eventImages}>
                    <View
                      style={
                        (tailwind(''),
                        {
                          flex: 1,
                          backgroundColor: 'rgba(0,0,0, 0.30)',
                          justifyContent: 'flex-end',
                        })
                      }>
                      <View></View>
                      <View style={tailwind('')}>
                        <Text
                          style={[
                            tailwind('mx-4 my-5 font-bold'),
                            styles.textEvent,
                          ]}>
                          {item.placeName}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View>
          <TitleWithButton title="Favourites" isButtonRight />
          <View style={tailwind('m-4')}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={dataTemp2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={[
                    tailwind(
                      'flex flex-row flex justify-center flex-wrap m-2 bg-white',
                    ),
                    {
                      borderRadius: 15,
                      overflow: 'hidden',
                      width: widthPercentageToDP('50%'),
                      overflow: 'hidden',
                      shadowColor: 'black',
                      shadowRadius: 10,
                      shadowOpacity: 1,
                      elevation: 5,
                    },
                  ]}>
                  <View>
                    <View style={tailwind('w-full flex-1')}>
                      <ImageBackground
                        source={item.image}
                        imageStyle={{borderRadius: 10}}
                        style={[
                          tailwind(' my-3 self-center'),
                          styles.eventImages2,
                        ]}>
                        {item.isEvent ? (
                          <View
                            style={[
                              tailwind('p-2 m-2 rounded-full self-end'),
                              {backgroundColor: '#E50000'},
                            ]}>
                            <Text
                              style={tailwind(
                                'text-xs self-center text-white font-bold',
                              )}>
                              Event Happened !
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={tailwind(
                              'bg-gray-200 p-1 m-2 rounded-full self-end',
                            )}>
                            <Image
                              source={images.heartImg}
                              style={tailwind('w-3 h-3 ')}
                            />
                          </View>
                        )}
                      </ImageBackground>
                    </View>
                    <View
                      style={
                        (tailwind(''),
                        {
                          flex: 1,
                          backgroundColor: 'white',
                        })
                      }>
                      <View></View>
                      <View style={tailwind('')}>
                        <Text
                          style={[
                            tailwind('mb-4 font-bold'),
                            styles.textEvent2,
                          ]}>
                          {item.placeName}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  imageIcon: {
    width: widthPercentageToDP('15%'),
    height: widthPercentageToDP('15%'),
  },
  eventImages: {
    width: Dimensions.get('window').width * 0.37,
    height: Dimensions.get('window').width * 0.5,
  },
  eventImages2: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  textEvent: {
    color: 'white',
    fontSize: widthPercentageToDP('4%'),
  },
  textEvent2: {
    color: 'black',
    fontSize: widthPercentageToDP('4.5%'),
    overflow: 'hidden',
  },
});
