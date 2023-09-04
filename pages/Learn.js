import { useEffect, useState } from "react";
import { View , Text, TouchableOpacity , StyleSheet, SafeAreaView , Image , ImageBackground} from "react-native"
import Carousel from "react-native-snap-carousel";
import Entypo from "react-native-vector-icons/Entypo"
import ProgressBar from "../utilities/Progress";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import FontAwesome from "react-native-vector-icons/FontAwesome"




const Learn = ({route}) => {
    const navigation = useNavigation()
    const [data,setData] = useState(route.params.data)
    const [active,setActive] = useState(true)
    const [index,setIndex] = useState(0)
    const [speaker,setSpeaker] = useState(true)
    const [autoPlay,setAutoPlay] = useState(false)
    const [showLearnModal,setShowLearnModal] = useState(false)
    const [markedItems,setMarkedItems] = useState([])

     
    useEffect(()=>{
        const arr = [...data]
        const newArr = arr.filter((e)=>{
            return e.star === true
        })
        setMarkedItems(newArr)
        
       
    },[data])
    // useEffect(()=>{
    //     const arr = [...data]
    //     arr.sort(() => Math.random() - 0.5);
    //     setData(arr)
    // },[])
   useEffect(()=>{
    speaker?Speech.speak(data[index].word,{language:"en-US"}):
    Speech.stop()
    
   },[index])
   useEffect(()=>{
    if(active===false){
        Speech.speak(data[index].mean,{language:"tr-TR"});
    }
   },[active])

   function markItem (item){
    const arr = [...data]
    let index = arr.indexOf(item)
    arr[index].star = !(item.star)
    setData(arr)
    
}
   
  

    
    return (
        <SafeAreaView style={{height:"100%",width:"100%",backgroundColor:"#000"}}>

            <View style={{backgroundColor:"rgba(98,98,98,0.5)",width:"100%",height:"15%"}}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                    
                    onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back" size={50} color={"#fff"}/>
                    </TouchableOpacity>

                    <View style={{width:"77%",justifyContent:"center"}}>
                        <Text style={{color:"#fff",fontSize:30,textAlign:"center"}}>{route.params.name}</Text> 
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <TouchableOpacity
                                style={{marginHorizontal:5}}
                                onPress={async ()=>{ await setAutoPlay(!autoPlay);autoPlay?this._carousel.stopAutoplay():this._carousel.startAutoplay()}}>
                                    <Image source={
                                        autoPlay?require("../assets/8686782_ic_fluent_arrow_sync_regular_icon.png"):
                                        require("../assets/8686751_ic_fluent_arrow_sync_off_icon.png")
                                        } 
                                        style={{height:35,width:35}}
                                        />
                                </TouchableOpacity>
                                <Text style={{color:"white"}}>{autoPlay?"auto on":"auto off"}</Text>
                            </View>
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <TouchableOpacity
                            style={{marginHorizontal:5}}
                            onPress={()=>{setSpeaker(!speaker)}}>
                                <Image source={
                                    speaker?require("../assets/8687714_ic_fluent_person_voice_regular_icon.png"):
                                    require("../assets/8687650_ic_fluent_person_prohibited_regular_icon.png")
                                    } 
                                    style={{height:35,width:35}}
                                    />
                            </TouchableOpacity>
                            <Text style={{color:"#fff"}}>{speaker?"voice on":"voice off"}</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <AntDesign name="star" size={30} color={"#FFF5E0"}/>
                        <Text style={{color:"#fff",fontSize:18,marginHorizontal:5}}>{markedItems.length} marked</Text>
                    </View>
                </View>
            </View>

            <View style={{width:"100%",height:365,justifyContent:"center",alignItems:"center",marginTop:20}}>
                    <Carousel
                    onBeforeSnapToItem={()=>{!active?setActive(true):""}}
                    ref={(c) => { this._carousel = c; }}
                    autoplay={autoPlay}
                    autoplayInterval={2000}
                    onSnapToItem={()=>{setIndex(this._carousel.currentIndex)}}
                    data={data}
                    sliderWidth={365}
                    itemWidth={365}
                    renderItem={({item})=>(
                        
                       
                            <TouchableOpacity style={{
                                backgroundColor:"rgba(98,98,98,0.5)",
                                height:360,
                                width:"100%",
                                borderRadius:20,
                            }}
                                onPress={()=>{setActive(!active)}}>
                                     <ImageBackground source={{uri:item.img}}
                                    resizeMode="cover"
                                    style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",position:"relative"}}
                                    imageStyle={{borderRadius:18,}}>
                                <TouchableOpacity
                            style={{position:"absolute",top:5,right:10,height:50,width:50,justifyContent:"center",alignItems:"center",zIndex:1}}
                            onPress={()=>{markItem(item)}}>
                                {item.star?<FontAwesome name="star" size={30}  color={"#FFF5E0"}/>:
                                <FontAwesome name="star-o" size={30}  color={"#FFF5E0"}/>}
                            </TouchableOpacity>
                                <Text style={{fontSize:40,color:"#fff"}}>{active?item.word:item.mean}</Text>
                        </ImageBackground>
                            </TouchableOpacity>
                        
                    )}
                    /> 
            </View>
            <View style={{
                height:70,
                alignItems:"center",
                justifyContent:"center"
            }}>
                <ProgressBar
                    color="#fff"
                    progressColor="rgba(98,98,98,1)"
                    height={20}
                    width={80}
                    progress={(index/(data.length-1))*100}
                /> 
            </View>
            <View style={{
                height:60,
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
            }}>
                 <TouchableOpacity  onPress={()=>{this._carousel.snapToPrev()}}>
                    <Entypo name="chevron-with-circle-left" size={50} color={"#fff"}/>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginHorizontal:5}}>
                    <Text style={{fontSize:20,color:"#fff"}}>{index} /</Text>
                    <Text style={{fontSize:20,color:"#fff"}}> {data.length-1}</Text>
                </View>
                <TouchableOpacity  onPress={()=>{this._carousel.snapToNext();index===data.length-1?this._carousel.snapToItem(1):""}}>
                <Entypo name="chevron-with-circle-right" size={50} color={"#fff"}/>
                
                </TouchableOpacity> 
            </View>

           
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

   
})

export default Learn