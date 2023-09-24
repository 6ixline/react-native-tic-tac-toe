import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  mainContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  heading:{
    color: colors.headingColor,
    fontFamily: fonts.primary,
    fontSize: 46,
    textAlign: 'center',
    lineHeight: 65
  },
  binText:{
    fontSize: 22,
    fontFamily: fonts.primary,
    color: colors.offsetColor,
    marginLeft: 10
  }
})
