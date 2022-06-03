import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Card from '../../components/cards/Card';
import CardMenu from '../../components/cards/CardMenu';
import images from '../../utils/image';
import {useTailwind} from 'tailwind-rn';
const SavedPlaces = () => {
  const tailwind = useTailwind();
  const [dataSaved, setdataSaved] = useState([
    {id: 1, name: 'Coffee Menus', img: images.grandPadis, address: 'Bondowoso'},
    {id: 2, name: 'Wifi', img: images.grandPadis, address: 'Jember'},
    {id: 3, name: 'Parking', img: images.grandPadis, address: 'Malang'},
  ]);
  return (
    <View style={tailwind('bg-white flex-1')}>
      <FlatList
        data={dataSaved}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Card
            titlePlace={item.name}
            imgSrc={item.img}
            placeAddress={item.address}
            imgSrcIcon={images.savedInactive}
          />
        )}
      />
    </View>
  );
};

export default SavedPlaces;

const styles = StyleSheet.create({});
