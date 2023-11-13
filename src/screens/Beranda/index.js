import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Clock,
  SearchNormal1,
  ProfileCircle,
  Wallet3,
  CardSend,
  MoreCircle,
  Home,
  Export,
} from 'iconsax-react-native';
import {fontType, colors} from '../../../src/theme';
import {
  sprite,
  box,
  bill,
  more,
  scooter,
  shopping,
  spoon,
  train,
  car,
  rating,
  menubar,
} from '../../../src/assets/Images';
import {useNavigation} from '@react-navigation/native';

export default function Beranda() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SearchNormal1
            color={colors.black()}
            variant="Linear"
            size={24}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchbar}
            placeholder="Cari Layanan, Makanan, & Tujuan"
            placeholderTextColor="black"
            onChangeText={this.updateSearch}
          />
          <ProfileCircle
            color="green"
            variant="Bold"
            size={40}
            style={styles.profileIcon}
          />
        </View>
      </View>
      <ScrollView>
        <Image source={sprite} style={styles.image} />
        <Payment />
        <Main />
        <Text
          style={{fontSize: 22, fontWeight: 'bold', color: 'black', left: 20}}>
          Kasih Rating dulu, yuk!
        </Text>
        <Image source={rating} style={styles.imagerating} />
      </ScrollView>

      {/* <View style={bar.menu}>
        <TouchableOpacity style={bar.icon}>
          <Icon name="home" size={25} color="#5B8A72" />
          <Text style={bar.Text}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={bar.icon}>
          <Icon name="ribbon" size={25} color="#515E63" />
          <Text style={bar.Text}>Promo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={bar.icon}>
          <Icon name="document-text" size={25} color="#515E63" />
          <Text style={bar.Text}>Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={bar.icon}>
          <Icon name="chatbox" size={25} color="#515E63" />
          <Text style={bar.Text}>Chat</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3
        color="#00DBE5"
        variant="Bold"
        size={40}
        style={payment.wallet}
      />
      <View style={payment.debit}>
        <Text style={payment.saldo}>Rp2.500</Text>
        <Text style={payment.coin}>10 Coins</Text>
      </View>
      <View style={payment.pay}>
        <CardSend color="#00DBE5" variant="Bold" size={30} />
        <Text style={payment.payText}>Bayar</Text>
      </View>
      <View style={payment.history}>
        <Clock color="#00DBE5" variant="Bold" size={30} />
        <Text style={payment.payText}>Riwa...</Text>
      </View>
      <View style={payment.more}>
        <MoreCircle color="#00DBE5" variant="Bold" size={30} />
        <Text style={payment.payText}>Lainn...</Text>
      </View>
    </View>
  );
};

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image source={scooter} style={home.icon} />
          <Text style={home.goRideText}>GoRide</Text>
        </View>
        <View style={home.background}>
          <Image source={car} style={home.icon} />
          <Text style={home.goCarText}>GoCar</Text>
        </View>
        <View style={home.background}>
          <Image source={spoon} style={home.icon} />
          <Text style={home.goFoodText}>GoFood</Text>
        </View>
        <View style={home.background}>
          <Image source={box} style={home.icon} />
          <Text style={home.goSendText}>GoSend</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image source={shopping} style={home.icon} />
          <Text style={home.goMartText}>GoMart</Text>
        </View>
        <View style={home.background}>
          <Image source={bill} style={home.icon} />
          <Text style={home.goBillText}>GoTagihan</Text>
        </View>
        <View style={home.background}>
          <Image source={train} style={home.icon} />
          <Text style={home.goTransitText}>GoShop</Text>
        </View>
        <View style={home.background}>
          <Image source={more} style={home.icon} />
          <Text style={home.goMoreText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
};

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40, // Add some margin to separate rows
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 15,
  },
  icon: {
    top: 8,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  goRideText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goCarText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goFoodText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goSendText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goMartText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goBillText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goTransitText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 16,
    textAlign: 'center',
  },
  goMoreText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
    color: colors.black(),
    top: 13,
    textAlign: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: 'auto',
    height: 150,
    objectFit: 'cover',
  },
  imagerating: {
    marginTop: 30,
    marginLeft: 50,
    width: 'auto',
    height: 150,
    objectFit: 'cover',
  },
  imagemenubar: {
    marginTop: 30,
    marginLeft: 10,
    width: 'auto',
    height: 200,
    objectFit: 'contain',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 45,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    color: 'black',
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 380,
  },
  menubar: {},
});

const payment = StyleSheet.create({
  container: {
    top: -30,
    marginHorizontal: 20,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10, // Meningkatkan nilai ini akan membuat bayangan lebih terlihat
    },
    shadowOpacity: 1, // Meningkatkan nilai ini akan membuat bayangan lebih tebal
    shadowRadius: 10, // Meningkatkan nilai ini akan membuat bayangan lebih menyebar
    elevation: 5, // Ini berlaku hanya untuk Android
  },
  wallet: {
    justifyContent: 'center',
    top: 8,
    left: 20,
  },
  saldo: {
    fontSize: 16,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    justifyContent: 'center',
    left: 25,
  },
  pay: {
    justifyContent: 'center',
    left: 60,
    paddingLeft: 50,
  },
  payText: {
    left: -5,
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  history: {
    justifyContent: 'center',
    left: 80,
    paddingLeft: 10,
  },
  more: {
    justifyContent: 'center',
    left: 90,
    paddingLeft: 10,
  },
});


