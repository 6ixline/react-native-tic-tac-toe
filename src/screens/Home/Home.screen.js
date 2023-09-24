import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native'
import styles from './Home.style'
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayer } from '../../stores/player.reducer';


const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  function handleOption(val){
    dispatch(setPlayer(val));
    navigation.navigate("GameBoard");
  }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Text style={styles.heading}>Which one you always choose?</Text>
          <View style={styles.mainContainer}>
            <Pressable onPress={()=> { handleOption("o") }}>
              <Icon name={'ios-radio-button-off-outline'} size={80} color={colors.primaryColor} />
            </Pressable>
            <Text style={styles.binText}>or</Text>
            <Pressable onPress={()=> { handleOption("x") }}>
              <Icon name={'ios-close'} size={100} color={colors.secondaryColor} />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
