import { View , Text , Modal ,TouchableOpacity , TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from "react";

const WordModal = (props) => {
   const [word,setWord] = useState("")
   const [mean,setMean] = useState("")
   function handleChange () {
    const arr = [...props.data]
    let index = arr.indexOf(props.modalData)
    word!==""?arr[index].word = word:arr[index].word = props.modalData.word
    mean!==""?arr[index].mean = mean:arr[index].mean = props.modalData.mean
    console.log(arr[index]);
    props.setData(arr)
   }
    return (
        <Modal visible={props.showModal} animationType="fade" transparent={true}
        >
            <View
            style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center"}}>
                <View style={{height:100,width:350,backgroundColor:"rgba(0, 0, 0, 0.8)",position:"absolute",top:"20%",borderRadius:25,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity
                    onPress={()=>{props.setShowModal(false);handleChange();setMean(""),setWord("")}}>
                        <Ionicons name="caret-back-sharp" size={30} color={"white"}/>
                    </TouchableOpacity>
                    <View style={{width:310,height:80,flexDirection:"row",alignItems:"center"}}>
                        <TextInput 
                        style={{width:150,height:60,marginRight:2,fontSize:24,borderBottomWidth:1,borderColor:"gray",textAlign:"center",color:"#fff"}} 
                        placeholder={props.modalData.word} placeholderTextColor={"gray"}
                        onChangeText={setWord}/>
                        <TextInput 
                        style={{width:150,height:60,fontSize:24,borderBottomWidth:1,borderColor:"gray",textAlign:"center",color:"#fff"}} 
                        placeholder={props.modalData.mean} placeholderTextColor={"gray"}
                        onChangeText={setMean}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default WordModal