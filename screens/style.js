import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    line: {
        borderWidth: 1, 
        height: 1, 
        backgroundColor: 'grey'
    },
    main: {
        width: '95%', 
        margin: 15
    },
/*------------------------------------------------ProductInfo---------------------------------------*/
    ProductsInfo: {
        flexDirection: 'row', 
        position: 'relative', 
        justifyContent: 'space-between'
    },
    Off: {
        backgroundColor: '#C60C30', 
        width: 40, 
        height: 40, 
        borderRadius: '50%', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute', 
        left: 15, 
        top: 20,
        zIndex: 999
    },
    Offtxt: {
        textAlign: 'center', 
        color: 'white', 
        fontWeight: 700
    },
    img: {
        width: '70%', 
        height: 250, 
        resizeMode: 'contain', 
        margin: 'auto'
    },
    BackIcon: {
        backgroundColor: 'grey', 
        width: 40, 
        height: 40, 
        borderRadius: '50%', 
        justifyContent: 'center',
        alignItems: 'center' 
    }
})
