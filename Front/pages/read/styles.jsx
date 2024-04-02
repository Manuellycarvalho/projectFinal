import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFC0CB',
        flex:1
    },
    caixa:{
        width:'80%',
        height:40,
        borderColor: '#FFC0CB',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FFF0F5'
    },
    btn:{
        width:'40%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FF69B4', 
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize: 25,
        color: 'white'
    },
    textTitle:{
        fontSize: 50,
        fontWeight:'bold'
    },
    textInput:{
        padding:10,
    },
    textos:{
        width:'80%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FFE4E1',
        justifyContent: 'center'
    },


})

export default styles