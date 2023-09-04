import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Main: {
        width: '95%', 
        margin: 'auto'
    },
/*-----------------------------------------------Search-------------------------------------------*/
    SearchBox: {
        backgroundColor: '#00CED1',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SearchInput: {
        backgroundColor: 'white',
        height: 40,
        width: '92%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
/*-----------------------------------------------Info-------------------------------------------*/
    Info: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AFEEEE',
        padding: 10,
        gap: 5
    },
    Infotxt: {
        fontSize: 13,
        fontWeight: 500
    },
/*-----------------------------------------------Product-------------------------------------------*/
    Products: {
        flexDirection: 'row' ,
        flexWrap: 'wrap', 
        alignItems: 'center',
         justifyContent: 'space-between'
    },
    ImageProduct: {
        width: 180, 
        height: 180, 
        marginTop: 15, 
        resizeMode: 'contain', 
        borderRadius: 15
    },
/*-----------------------------------------------ProductItem-------------------------------------------*/
ImageProductItem: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
}
})