import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Pressable
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import { useSelector } from 'react-redux'
import GameBoardStyle from './GameBoard.style'
import colors from '../../utils/colors'

const GameBoard = ({ navigation }) => {
  const players = useSelector((state)=> (state));
  const [activePlayer, setActivePlayer] = useState("o");
  const freshBoard = Array(3).fill().map(()=> Array(3).fill(-1));
  const [boardState, setBoardstate] = useState(freshBoard)
  useEffect(()=>{
  }, [])

  function handleBoardClick(i, j){
    let temp = [...boardState];
    if(temp[i][j] == -1){
      temp[i][j] = activePlayer;
      setBoardstate(temp);
      if(activePlayer == "o"){
        setActivePlayer("x");
      }else{
        setActivePlayer("o");
      }
    }
  }

  function handleReset(){
    setBoardstate(freshBoard);
  }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={GameBoardStyle.header}>
          <View style={GameBoardStyle.iconCont}>
            <Icon name={'ios-radio-button-off-outline'} size={30} color={colors.primaryColor} />
            <Text style={[GameBoardStyle.hText, {color: colors.primaryColor}]}>4 Wins</Text>
          </View>
          <View style={GameBoardStyle.iconCont}>
            <Icon name={'ios-close'} size={30} color={colors.secondaryColor} />
            <Text style={[GameBoardStyle.hText, {color: colors.secondaryColor}]}>2 Wins</Text>
          </View>
          <View style={GameBoardStyle.iconCont}>
            <Icon1 name={'scale-balance'} size={30} color={colors.offsetColor} />
            <Text style={[GameBoardStyle.hText]}>4 draws</Text>
          </View>
        </View>

        <View style={GameBoardStyle.board}>
            {boardState.map((row, index)=>(
              <View key={index} style={GameBoardStyle.rowCont}>
              {row.map((val, colIndex)=>(
                <Pressable key={`${index}${colIndex}`} onPress={()=>{ handleBoardClick(index, colIndex)}} style={[GameBoardStyle.tile, colIndex == 0 && { borderLeftWidth : 0}, index == boardState.length - 1 && { borderBottomWidth : 0}]}>
                  <Text style={{textAlign: 'center'}}>{(val == "o" && <Icon name={'ios-radio-button-off-outline'} size={80} color={colors.primaryColor} />) || (val == "x" && <Icon name={'ios-close'} size={80} color={colors.secondaryColor} />)}</Text>
                </Pressable>
              ))}
              </View>
            ))}

        </View>
        <View style={GameBoardStyle.playerIndicatorCont}>
          <View style={GameBoardStyle.playerIndicator}>
            <View style={activePlayer == "x" && GameBoardStyle.active}>
              <Icon name={'ios-close'} size={30} color={activePlayer == "x" ? "#fff" : colors.secondaryColor} />
            </View>
            <View style={activePlayer == "o" && GameBoardStyle.active}>
              <Icon name={'ios-radio-button-off-outline'} size={28} style={{marginLeft: 3}} color={activePlayer == "o" ? "#fff" : colors.primaryColor} />
            </View>
          </View>
        </View>
        
        <View style={GameBoardStyle.footerCont}>
          <Pressable style={GameBoardStyle.border} onPress={()=>{handleReset()}}>
            <View style={GameBoardStyle.buttons}>
              <Icon2 name={'refresh'} size={50} color={'#fff'} />
            </View>
          </Pressable>
            <View style={GameBoardStyle.activePlayer}>
              <Text style={GameBoardStyle.activePlayerText}>Player {activePlayer == "x" ? 1 : 2}</Text>
            </View>
            <Pressable style={GameBoardStyle.border}>
              <View style={GameBoardStyle.buttons}>
                <Icon name={'ios-settings-outline'} size={30} color={'#fff'} />
              </View>
            </Pressable>
        </View>
        
        
      </SafeAreaView>
    </>
  )
}

export default GameBoard
