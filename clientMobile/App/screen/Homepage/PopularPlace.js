import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import {useTailwind} from 'tailwind-rn/dist';
import images from '../../utils/image';
import Card from '../../components/cards/Card';
const PopularPlace = () => {
  const tailwind = useTailwind();
  const [dataTemp, setdataTemp] = useState([
    {
      id: 1,
      placeName: 'Grand Padis Hotel Jember',
      placeAddress: 'Bondowoso',
      Category: 'Hotel',
      image: images.grandPadis,
    },
    {
      id: 2,
      placeName: 'Pesen Kopi',
      Category: 'Cafetaria',
      image: images.grandPadis,
      placeAddress: 'Bondowoso',
    },
    {
      id: 3,
      placeName: 'Puncak Pyramid',
      Category: 'Nature Tour',
      image: images.grandPadis,
      placeAddress: 'Bondowoso',
    },
  ]);
  return (
    <View style={tailwind('p-2 bg-white flex-1')}>
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
      <FlatList
        data={dataTemp}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Card
            titlePlace={item.placeName}
            placeAddress={item.placeAddress}
            imgSrc={item.image}
            isIconRight={true}
            imgSrcIcon={images.saveGreenIcon}
          />
        )}
      />
    </View>
  );
};

export default PopularPlace;

const styles = StyleSheet.create({});
