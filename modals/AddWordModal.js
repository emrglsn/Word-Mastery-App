import { View , Text , Modal ,TouchableOpacity , TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign"

const AddWordModal = (props) => {
   const [word,setWord] = useState("")
   const [mean,setMean] = useState("")
   function handleChange () {
    const arr = [...props.data]
    arr.unshift({word:word,mean,mean})
    console.log(arr[arr.length-1]);
    props.setData(arr)
   }
    return (
        <Modal visible={props.addWordModal} animationType="fade" transparent={true}
        >
            <View
            style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center"}}>
                <View style={{height:100,width:350,backgroundColor:"rgba(0, 0, 0, 0.8)",position:"absolute",top:"20%",borderRadius:25,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity
                    onPress={()=>{props.setAddWordModal(false)}}>
                        <Ionicons name="caret-back-sharp" size={30} color={"white"}/>
                    </TouchableOpacity>
                    <View style={{width:310,height:80,flexDirection:"row",alignItems:"center"}}>
                        <TextInput 
                        style={{width:135,height:60,marginRight:2,fontSize:24,borderBottomWidth:1,borderColor:"gray",textAlign:"center",color:"#fff"}} 
                        placeholder={"Word"} placeholderTextColor={"gray"}
                        onChangeText={setWord}/>
                        <TextInput 
                        style={{width:135,height:60,fontSize:24,borderBottomWidth:1,borderColor:"gray",textAlign:"center",color:"#fff"}} 
                        placeholder={"Mean"} placeholderTextColor={"gray"}
                        onChangeText={setMean}/>
                    <TouchableOpacity
                    onPress={()=>{handleChange();setMean(""),setWord("");props.setAddWordModal(false)}}>
                    <AntDesign name="plus" size={40} color={"white"}/>
                    </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default AddWordModal