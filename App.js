import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const initial =[
  {
    id: 1,
    source: require('./drawable/ic_bantal.png'),
    name: 'Bantal',
    harga: '$150'
  },
  {
    id: 2,
    source: require('./drawable/ic_meja.png'),
    name: 'Meja',
    harga: '$150'
  },
  {
    id: 3,
    source: require('./drawable/ic_bantal.png'),
    name: 'Bantal',
    harga: '$150'
  },
  {
    id: 4,
    source: require('./drawable/ic_meja.png'),
    name: 'Meja',
    harga: '$150'
  }
]

const renderItem = ({item}) => {
  return(
    <TouchableOpacity style={styles.itemWrapper} onPress={() => Alert.alert('Item',item.name)}>
    <Image source={item.source} style={{width: 120, height: 120, marginBottom: 10,}}/>
    <View style={{position: 'relative', bottom: 12,}}>
    <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{item.name}</Text>

    <Text style={{fontSize: 12, color: 'black'}}>{item.harga}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default function App() {
  const [furniture, setFurniture] = React.useState(initial)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" backgroundColor='#000' />
      <View style={styles.Header}>
      <View style={styles.subHeader}>
      <Text style={{fontSize: 18, color: 'white', paddingLeft: 20, fontWeight: 'bold'}}>BagiFurniturePage</Text>
      </View>
        <Text style={styles.title}>New Arrival</Text>
        <Text style={styles.subTitle}>1:280</Text>
      </View>
      <FlatList
      numColumns={2}
      data={furniture}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  Header: {
    width: width,
    height: '42%',
    backgroundColor: '#2ecc71',
  },

  title: {
    fontSize: 45,
    color: 'white',
    position: 'absolute',
    bottom: 60,
    left: 20,
  },

  subTitle:{
    fontSize: 25,
    color: 'white',
    position: 'absolute',
    bottom: 25,
    left: 22,
  },
  itemWrapper:{
    width: 180,
    height: 180,
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subHeader:{
    width: width,
    height: 70,
    backgroundColor: '#27ae60',
    marginTop: 20,
    justifyContent: 'center',
  }
});
