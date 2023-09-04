import { View , Text , Modal ,TouchableOpacity , Image ,TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { userData } from "../DATA";
import { useState } from "react";

const SettingsModal = ({showSettings,setShowSettings}) => {
    const [name,setName] = useState(userData.username)

    function handleNameChange () {
        userData.username=name
    }
    return (
        <Modal visible={showSettings} animationType="fade" transparent={true}>
            <View style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
                <View style={{height:320,width:300,backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",borderRadius:20}}>
                        <View style={{width:"100%",height:50,flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity
                            onPress={()=>{setShowSettings(false);handleNameChange()}}>
                                <Ionicons name="caret-back-sharp" size={40} color={"white"}/>
                            </TouchableOpacity>
                            <Text style={{textAlign:"center",fontSize:26,color:"#fff",marginLeft:65}}>Settings</Text>
                        </View>
                        <View style={{width:"80%",height:100,justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}>
                            <Text style={{position:"absolute",color:"#fff",fontSize:13,top:0,left:0,fontWeight:700}}>Profile Image</Text>
                            <Image source={{uri:"https://www.realsimple.com/thmb/wRNmjyn_1rP9Abaw2RLb6B7kaPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blond-colors-1-2000-cd8cb4e67841415891e7b32fb55f823e.jpg"}} 
                            style={{height:50,width:50,borderRadius:"50%",marginRight:5}}/>
                            <TouchableOpacity style={{flexDirection:"row",height:50,width:150,backgroundColor:"rgba(69, 69, 69, 0.6)",justifyContent:"center",alignItems:"center"}}>
                                <MaterialIcons name="image-search" size={30} color={"#fff"}/>
                                <Text style={{textAlign:"center",fontSize:16,color:"#fff"}}>Change the pp</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"80%",height:100,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{position:"absolute",color:"#fff",fontSize:13,top:0,left:0,fontWeight:700}}>Username</Text>
                            <TextInput 
                            style={{backgroundColor:"rgba(69, 69, 69, 0.6)",width:250,height:60,textAlign:"center",fontSize:20,borderRadius:15,color:"#fff"}} 
                            placeholder="What is your name ?" placeholderTextColor={"gray"}
                            onChangeText={setName}
                            />
                        </View>
                        <View style={{width:"80%",height:100,justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}>
                            <Text style={{position:"absolute",color:"#fff",fontSize:13,top:0,left:0,fontWeight:700}}>Choose a Theme</Text>
                            <TouchableOpacity style={{height:50,width:50,backgroundColor:"brown"}}></TouchableOpacity>
                            <TouchableOpacity style={{height:50,width:50,backgroundColor:"brown"}}></TouchableOpacity>
                            <TouchableOpacity style={{height:50,width:50,backgroundColor:"brown"}}></TouchableOpacity>
                        </View>
                </View>
            </View>
        </Modal>
    )
}
export default SettingsModal
