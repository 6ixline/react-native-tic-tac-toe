import { StyleSheet } from 'react-native'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

export default StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40
    },
    iconCont: {
        display: 'flex',
        alignItems: 'center'
    },
    hText: {
        fontFamily: fonts.primary,
        fontSize: 16,
        marginTop: 5,
        color: colors.offsetColor,
        letterSpacing: 1
    },
    playerIndicatorCont: {
        display: 'flex',
        alignItems: 'center'
    },
    playerIndicator: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100
    },
    active: {
        backgroundColor: colors.primaryColor,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35
    },
    buttons: {
        backgroundColor: colors.offsetColor,
        width: 60,
        height: 60,
        borderRadius: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    border:{
        borderWidth: 1,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        borderColor: colors.offsetColor
    },
    footerCont:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    activePlayer:{
        width: 100,
        borderWidth: 1,
        borderColor: colors.offsetColor,
        borderRadius: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activePlayerText:{
        fontFamily: fonts.primary,
        fontSize: 16
    },
    board:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 120

    },
    rowCont:{ 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        flex: 1
    },
    tile:{
        flex: 1,
        borderColor: colors.offsetColor, 
        borderBottomWidth: 2, 
        height: "100%",
        borderLeftWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
