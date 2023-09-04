import { useEffect, useState, useRef } from "react";
import { View , Text , StyleSheet, FlatList, TouchableOpacity , SafeAreaView, ImageBackground, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import Level from "../utilities/Level";
import { Video, ResizeMode } from 'expo-av';
import TestMainFnc from "../functions/TestMain";
import WordModal from "../modals/WordModal";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import AddWordModal from "../modals/AddWordModal";




const Library = ({route}) => {
    const swipeableRef = useRef(null);

    const [data,setData] = useState(route.params.data)
    const navigation = useNavigation()

    const [showModal,setShowModal] = useState(false)
    const [modalData,setModalData] = useState([])
    const [addWordModal,setAddWordModal] = useState(false)

    function deleteItem (item) {
        const arr = [...route.params.data]
        let index = arr.indexOf(item)
        arr.splice(index,1)
        setData([])
        setData(arr)

        console.log(item,index,arr[index]);
    }
    function markItem (item){
        const arr = [...data]
        let index = arr.indexOf(item)
        arr[index].star = !(item.star)
        setData(arr)
    }

    const eben = ()=>{
        return(
            <View style={{height:60,width:70,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("../assets/trash.png")} style={{height:40,width:40}}/>
            </View>
        )
    }
   

   
   
    return (
        <View style={{height:"100%",width:"100%"}}>

        
        <SafeAreaView style={{alignItems:"center",width:"100%",backgroundColor:"#000"}}>
             <Video
        
        style={{height:"103%",width:"100%",position:"absolute",top:0,left:0}}
        source={{
          uri: route.params.bgVideo,
        }}
        useNativeControls={false}
        shouldPlay={true}
        resizeMode={ResizeMode.COVER}
        isLooping
        
      /> 
            
            
             <View style={{width:"100%",height:120,justifyContent:"center",alignItems:"center"}}>
                <View style={{width:"95%",height:110,backgroundColor:"rgba(98,98,98,0.5)"}}>
                    <View style={{ flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={50} color={"#fff"}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:30,margin:10,color:"#fff",textAlign:"center"}}>{route.params.name}</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"10%",left:"5%"}}>
                        <Text style={{fontSize:20,marginLeft:20,color:"#fff",marginTop:10}}>Level on this library</Text>
                        <Level
                    size={40}
                    borderWidth={2}
                    innerColor1={"#96B6C5"}
                    innerColor2={"#96B6C5"}
                    backgroundColor={""}
                    borderColor={"#fff"}
                    />
                    </View>
                    <Text style={{fontSize:10,margin:10,color:"#fff",position:"absolute",top:"33%",right:"2%"}}>{route.params.main} & {route.params.sec}</Text>
                        <View style={{position:"absolute",bottom:"5%",right:"4%",flexDirection:"row",alignItems:"center"}}>
                            <AntDesign name="tagso" size={25} color={"#fff"}/>
                            <Text style={{color:"#fff",fontSize:10}}>{data.length} words</Text>
                        </View>
                </View>
            </View>

            <View style={{height:51,width:"100%",justifyContent:"center",alignItems:"center"}}>
                <View style={{backgroundColor:"rgba(98,98,98,0.5)",height:50,width:"90%",flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity 
                    style={{width:"50%",height:"80%",justifyContent:"center",alignItems:"center",flexDirection:"row",borderRightWidth:1,borderColor:"gray"}}
                    onPress={()=>{
                        navigation.navigate("Learn",{data:route.params.data,name:route.params.name})
                    }}>
                            <Text style={{color:"#fff",fontSize:20,marginRight:8}}>Exercise</Text>
                            <Image source={require("../assets/book.png")} style={{height:30,width:30}}/>
                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{width:"50%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row"}}
                    onPress={()=>{          
                        let ExamData = TestMainFnc(route.params.data)
                        console.log(ExamData[0].length);
                        navigation.navigate("Exam",{data:ExamData[0],answerControl:ExamData[1],testLevel:route.params.testLevel})
                       
                    }}>
                       
                            <Text style={{color:"#fff",fontSize:22,marginHorizontal:10}}>Exam</Text>
                            <Image source={require("../assets/paper.png")} style={{height:30,width:30,marginHorizontal:10}}/>
                            
                        
                    </TouchableOpacity>
                    
                </View>
            </View>

            <TouchableOpacity 
            style={{width:110,height:40,backgroundColor:"rgba(98,98,98,0.5)",marginTop:5,justifyContent:"center",alignItems:"center",borderRadius:"30%"}}
            onPress={()=>{setAddWordModal(true)}}>
                <AntDesign name="plus" size={40} color={"white"}/>
            </TouchableOpacity>

            <View style={{height:"78%",marginTop:5}}>
                <FlatList
                data={data}
                renderItem={({item})=>(
                    <Swipeable
                    ref={swipeableRef}
                    renderRightActions={eben}
                    onSwipeableOpen={()=>{deleteItem(item)}}
                    
                    >
                    

                    
                    <TouchableOpacity 
                    style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"rgba(98,98,98,0.5)",
                    height:60,
                    width:320,
                    borderRadius:10,
                    marginVertical:2,
                    justifyContent:"space-around",}}
                    
                    onPress={()=>{setShowModal(true);setModalData(item)}}>
                        <TouchableOpacity
                        style={{position:"absolute",top:7,left:"43%",height:50,width:50,justifyContent:"center",alignItems:"center",zIndex:1}}
                        onPress={()=>{markItem(item)}}>
                            {item.star?<FontAwesome name="star" size={28}  color={"#FFF5E0"}/>:
                            <FontAwesome name="star-o" size={28}  color={"#FFF5E0"}/>}
                        </TouchableOpacity>
                        <View style={{flex:1,height:"100%",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff"}}>{item.word}</Text></View>
                        <View style={{flex:1,height:"100%",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#fff"}}>{item.mean}</Text></View>
                    </TouchableOpacity>
                    </Swipeable>
                )}
                />
            </View> 
            {<WordModal
            showModal={showModal}
            setShowModal={setShowModal}
            modalData={modalData}
            data={data}
            setData={setData}
            />}
            <AddWordModal
            addWordModal={addWordModal}
            setAddWordModal={setAddWordModal}
            modalData={modalData}
            data={data}
            setData={setData}
            />
        </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
   

   
   
})

export default Library