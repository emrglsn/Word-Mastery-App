import { View , Text , Modal ,TouchableOpacity , TextInput , FlatList , ImageBackground} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { systemDATA } from "../DATA";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useEffect, useState ,useLayoutEffect} from "react";

const SearchLibrary = ({searchLib,setSearchLib}) => {
    const [data,setData] = useState(systemDATA)
    const [text,setText] = useState("")
    const navigation = useNavigation()

    

       useLayoutEffect(()=>{

           const SearchFnc = () => {
               
                   const length = text.length
               const lowerCaseText = text.toLowerCase()
               const filteredArray = systemDATA.filter((item) =>
               item.name.toLowerCase().startsWith(lowerCaseText))
               filteredArray!==[]?setData(filteredArray):setData([])
           
               
               
                   
               }
               SearchFnc()
       },[text])
            
       
        
       
      
        
    
    return (
        <Modal visible={searchLib} animationType="slide" transparent={true}>
            <View style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.3)",justifyContent:"flex-end",alignItems:"center"}}>
                <View style={{height:550,width:"100%",backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",borderRadius:20}}>
                    <View style={{height:65,width:"95%",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                        <TouchableOpacity
                        onPress={()=>{setSearchLib(false)}}>
                            <Ionicons name="caret-back-sharp" size={40} color={"white"}/>
                        </TouchableOpacity>
                        <TextInput 
                        style={{width:270,height:50,backgroundColor:"rgba(98,98,98,0.5)",borderRadius:7,color:"white",textAlign:"center"}} 
                        placeholder="Search All Libraries" placeholderTextColor={"#fff"}
                        
                        onChangeText={setText}
                        />
                        <TouchableOpacity>
                            <EvilIcons name="search" size={50} color={"white"}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:"90%",height:480,alignItems:"center"}}>
                    <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                        style={{height:120,width:330,backgroundColor:"gray",marginVertical:10,borderRadius:10}}
                        onPress={()=>{navigation.navigate("eben",{data:item.data,main:item.mainLanguage,sec:item.secondLanguage,name:item.name,bgVideo:item.backgroundVideo,testLevel:item.testLevel});setSearchLib(false)}}>
                            <ImageBackground source={{uri:item.backgroundImage,}}
                            resizeMode="cover"
                            style={{height:"100%",width:"100%"}}
                            imageStyle={{borderRadius:10,}}>
                                
                            <View style={{flexDirection:"row",position:"relative"}}>
                                <Text style={{fontSize:30,color:"#fff",position:"absolute",top:15,left:25,fontWeight:700}}>{item.name}</Text>
                                <View style={{height:25,width:50,backgroundColor:"#fff",justifyContent:"center",alignItems:"center",position:"absolute",top:87,left:10,borderRadius:10}}>
                                    <Text style={{fontWeight:700}}>55 ws.</Text>
                                </View>
                                <View style={{height:27,width:70,backgroundColor:"#fff",justifyContent:"center",alignItems:"center",position:"absolute",top:87,right:10,borderRadius:10}}>
                                    <Text style={{}}>{item.mainLanguage} {"&"} {item.secondLanguage}</Text>
                                </View>
                            </View>
                            </ImageBackground>
                        </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                />
                    </View>

                </View>
            </View>
        </Modal>
    )
}


export default SearchLibrary
