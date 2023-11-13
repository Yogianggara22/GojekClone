import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme';
import {categoriesPromo} from '../../Data';

const Header = () => {
  const [pencarian, setpencarian] = useState('');
  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <Text style={header.text}>Promo</Text>
      <View style={{flexDirection: 'row'}}>
        {/* text input pencarian */}
        <TextInput
          color="#000000"
          value={pencarian}
          onChangeText={text => setpencarian(text)}
          placeholder="Masukkan Kode promo ?"
          placeholderTextColor="#000000"
          style={header.textinput}
        />
        <TouchableOpacity style={header.logosearch} onPress={() => {}}>
          <View>
            {/* ikon cari */}
            <Icon name="search" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>

      {/* text categori */}
      <Text style={home.categoriText}>Promo Menarik Buat kamu</Text>
      <View>
        <FlatListCategory />
      </View>

      <View style={{paddingVertical: 40}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Pesan lagi dengan promo
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}>
          Rasa yang pernah ada tapi diskon
        </Text>
      </View>
    </View>
  );
};
const ItemCategory = ({item, onPress, color}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.green() : colors.black();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={categoriesPromo}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Promo = () => {
  return (
    <SafeAreaView style={home.area}>
      <View style={home.viw}>
        {/* header atas */}
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Promo;

const header = StyleSheet.create({
  textinput: {
    backgroundColor: '#FFFF',
    elevation: 3,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
    flex: 1,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  logosearch: {
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
});
const home = StyleSheet.create({
  categoriText: {
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  tanamanText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  dashboard: {
    marginHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
  area: {
    flex: 1,
    marginHorizontal: 5,
  },
  viw: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
const category = StyleSheet.create({
  item: {
    backgroundColor: '#F5FFFA',
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 7,
    marginVertical: 2,
  },
  title: {
    color: 'black',
    fontSize: 13,
  },
});
const carditem = StyleSheet.create({
  flatlish: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 12,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'center',
  },
  Text: {
    color: '#000000',
    fontSize: 16,
  },
});
