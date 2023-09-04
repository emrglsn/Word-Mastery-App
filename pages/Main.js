import { View , Text , StyleSheet ,FlatList , Image, SafeAreaView, TouchableOpacity , ScrollView , TextInput , ImageBackground} from "react-native"
import { useFonts } from "expo-font"
import { useState , useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { systemDATA  , userData} from "../DATA";
import SearchLibrary from "../modals/SearchLibrary";
import ProgressBar from "../utilities/Progress";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AchievementModal from "../modals/AchievementModal";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AddLibrary from "../modals/AddLibrary";
import SettingsModal from "../modals/SettingsModal";


    const trophies = [
        
        { 
          id:1,
          src:require("../assets/trophies/trophy6.png"),
          text:"Registered",
          achieved:true
        },
        { 
          id:2,
          src:require("../assets/trophies/trophy14.png"),
          text:"3 days of consecutive logins.",
          achieved:true
        },
        { 
          id:3,
          src:require("../assets/trophies/trophy3.png"),
          text:"5 days of consecutive logins.",
          achieved:true
        },
        { 
          id:4,
          src:require("../assets/trophies/trophy12.png"),
          text:"30 minutes of study time!",
          achieved:true
        },
        { 
          id:5,
          src:require("../assets/trophies/trophy18.png"),
          text:"1 hour of study time!",
          achieved:true
        },
        { 
          id:6,
          src:require("../assets/trophies/trophy1.png"),
          text:"1 week of consecutive logins.",
          achieved:true
        },
        { 
          id:7,
          src:require("../assets/trophies/trophy13.png"),
          text:"You've achieved success in 1 test.",
          achieved:false
        },
        { 
          id:8,
          src:require("../assets/trophies/trophy4.png"),
          text:"The first library has been created.",
          achieved:true
        },
        { 
          id:9,
          src:require("../assets/trophies/trophy7.png"),
          text:"2 weeks of consecutive logins.",
          achieved:false
        },
        { 
          id:11,
          src:require("../assets/trophies/trophy10.png"),
          text:"3 hours of study time!",
          achieved:true
        },
        { 
          id:10,
          src:require("../assets/trophies/trophy9.png"),
          text:"1 month of consecutive logins.",
          achieved:false
        },
        { 
          id:12,
          src:require("../assets/trophies/trophy2.png"),
          text:"3 libraries have been created",
          achieved:false
        },
        { 
          id:13,
          src:require("../assets/trophies/trophy15.png"),
          text:"5 hours of study time!",
          achieved:false
        },
        { 
          id:14,
          src:require("../assets/trophies/trophy16.png"),
          text:"8 hours of study time!",
          achieved:false
        },
        { 
          id:15,
          src:require("../assets/trophies/trophy17.png"),
          text:"2 months of consecutive logins.",
          achieved:false
        },
        { 
          id:16,
          src:require("../assets/trophies/trophy19.png"),
          text:"5 libraries have been created",
          achieved:false
        },
        { 
          id:17,
          src:require("../assets/trophies/trophy20.png"),
          text:"100 words have been added.",
          achieved:true
        },
        { 
          id:18,
          src:require("../assets/trophies/trophy5.png"),
          text:"250 words have been added.",
          achieved:true
        },
        { 
          id:19,
          src:require("../assets/trophies/trophy21.png"),
          text:"3 months of consecutive logins.",
          achieved:false
        },
        { 
          id:20,
          src:require("../assets/trophies/trophy22.png"),
          text:"24 hours of study time!",
          achieved:false
        },
        { 
          id:21,
          src:require("../assets/trophies/trophy23.png"),
          text:"1000 words have been added.",
          achieved:true
        },
        { 
          id:22,
          src:require("../assets/trophies/trophy8.png"),
          text:"1 year of consecutive logins.",
          achieved:false
        },
      ] 


const Main = () => {
  const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
      "OpenSansItalic" : require("../assets/fonts/OpenSans-Italic.ttf"),
      "PlayfairDisplay" : require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
      "Lato-Regular" : require("../assets/fonts/Lato-Regular.ttf"),
      "Poppins-Bold" : require("../assets/fonts/Poppins-Bold.ttf")
    })
    const [searchLib,setSearchLib] = useState(false)
    const [showAchModal,setShowAchModal] = useState(false)
    const [favData,setFavData] = useState([])
    const [recentData,setRecentData] = useState([])
    const [ownLibrary,setOwnLibrary] = useState([])
    const [addLibraryModal,setAddLibraryModal] = useState(false)
    const [showSettings,setShowSettings] = useState(false)


    // Favorites uE
    useEffect(()=>{
      
      setFavData(systemDATA.filter((e)=>{
          return e.isFavorite === true
      }))
  },[])

    // Recently uE
  useEffect(()=>{
    const arr = systemDATA.slice(0,4)
    setRecentData(arr)
},[])

    // OwnLibrary uE
useEffect(()=>{
  const arr = [...systemDATA]
  const mainData = arr.filter((e)=>{
      return e.editor===false
  })
  setOwnLibrary(mainData)
},[])

    


    return (
            
        <SafeAreaView style={styles.container}>          
           <ScrollView 
    contentContainerStyle={{alignItems:"center"}}
    >
                                {/* Profile Card */}
            <View style={{height:"19%",width:"95%",backgroundColor:"rgba(98,98,98,0.5)",borderRadius:"10%",}}>
                <View style={{flexDirection:"row",height:"30%",alignItems:"center",justifyContent:"space-around"}}>
                    <TouchableOpacity
                    onPress={()=>{setShowSettings(true)}}>
                      <Image source={require("../assets/settingsicon_white.png")} style={{height:35,width:35}}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Image source={{uri:"https://www.realsimple.com/thmb/wRNmjyn_1rP9Abaw2RLb6B7kaPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blond-colors-1-2000-cd8cb4e67841415891e7b32fb55f823e.jpg"}} 
                      style={{height:40,width:40,borderRadius:"50%",marginRight:5}}/>
                      <Text style={{fontSize:20,color:"#fff"}}>Welcome back , {userData.username} </Text>
                    </View>
                    <TouchableOpacity>
                      <Image source={require("../assets/392523_bell_notification_remind_reminder_ring_icon_white.png")} style={{height:30,width:30}}/>
                    </TouchableOpacity>
                </View>

                

                <View style={{flexDirection:"row",height:"70%",justifyContent:"space-around"}}>

                    <View style={{height:"60%",width:"60%",}}>
                        
                        <TouchableOpacity 
                        style={{height:"100%",alignItems:"center",borderRadius:"15%",borderBottomWidth:1,borderColor:"gray",marginTop:"2%"}}
                        onPress={()=>{setShowAchModal(true)}}>
                            <Text style={{fontSize:19,marginBottom:"4%",color:"#fff"}}>Recent Trophies</Text>
                            
                            <View>
                            <FlatList
                                horizontal={true}
                                
                                data={trophies}
                                renderItem={({item})=>(
                                        <View style={{opacity:item.achieved?1:0.4}}>
                                        <Image source={item.src} style={{height:37,width:37,marginHorizontal:3,opacity:0.8}}/>
                                        </View>
                                )}
                                keyExtractor={item => item.id}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{justifyContent:"center",alignItems:"center",marginVertical:10}}>
                           
                            <ProgressBar
                                textColor="#fff"
                                color="#D8D9DA"
                                progressColor="#F68989"
                                height={15}
                                width={100}
                                progress={90}
                                text="13 days"
                            /> 
                            <Text style={{fontFamily:"OpenSansItalic",fontSize:13,color:"#fff"}}>Next reward on : 14 days</Text>
                        </View>
                    </View>

                    <View style={{height:110,width:110,justifyContent:"center",alignItems:"center",borderRadius:20,marginTop:10,borderWidth:1,borderColor:"gray"}}>
                        <AnimatedCircularProgress
                                size={90}
                                width={12}
                                fill={40}
                                tintColor="#D8D9DA"
                                backgroundColor="#F68989" >
                                    {(fill)=>(
                                        <View style={{justifyContent:"center",alignItems:"center"}}>
                                            <Text style={{fontSize:13,color:"#fff"}}>
                                                37 min.
                                            </Text>
                                            <Text style={{fontSize:9,color:"#fff"}}>
                                                8 min left
                                            </Text>
                                        </View>
                                    )}
                            </AnimatedCircularProgress> 
                    </View>
               
                </View>
                <AchievementModal
                    showAchModal={showAchModal}
                    setShowAchModal={setShowAchModal}
                    trophies={trophies}
                />
            </View>

                                     {/* Search Bar */}

        <TouchableOpacity style={{height:65,width:"100%",alignItems:"center",flexDirection:"row",marginBottom:10,justifyContent:"center"}}
        onPress={()=>{setSearchLib(true)}}>
            
            <TextInput 
            onPressIn={()=>{setSearchLib(true)}}
            style={{width:270,height:45,backgroundColor:"rgba(98,98,98,0.5)",borderRadius:7,color:"white",paddingLeft:20,marginRight:8}} 
            placeholder="Search All Libraries" placeholderTextColor={"#fff"}
            editable={false}/>
            <EvilIcons name="search" size={40} color={"white"}/>
        </TouchableOpacity>

                                      {/* Favorites */}
        <View style={{height:200,width:"95%",marginTop:10}}>
            <Text style={{color:"#fff",fontSize:20,marginBottom:20,marginLeft:20}}>Editor's favorites</Text>
            <View>
                <FlatList
                horizontal={true}
                data={favData}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    onPress={()=>{navigation.navigate("eben",{data:item.data,main:item.mainLanguage,sec:item.secondLanguage,name:item.name,bgVideo:item.backgroundVideo,testLevel:item.testLevel})}}>
                        <View style={{height:100,width:210,backgroundColor:"gray",marginHorizontal:5,borderRadius:10}}>
                        <ImageBackground source={{uri:item.backgroundImage}}
                        resizeMode="cover"
                         style={{height:"100%",width:"100%"}}
                         imageStyle={{borderRadius:10,}}>
                            
                            <Text style={{fontSize:17,color:"#fff",fontWeight:500,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.2)"}}>{item.name}</Text>
                            <View style={{height:20,width:40,backgroundColor:"rgba(0, 0, 0, 0.5)",position:"absolute",bottom:5,left:5,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                                <Text style={{fontSize:12,fontWeight:700,color:"#fff"}}>{item.data.length} <Text style={{fontSize:9}}>ws.</Text></Text>
                            </View>
                            <View style={{height:20,width:50,backgroundColor:"rgba(0, 0, 0, 0.5)",position:"absolute",bottom:5,right:5,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                                <Text style={{fontSize:10,color:"#fff"}}>{item.mainLanguage}&{item.secondLanguage}</Text>
                            </View>
                            
                        </ImageBackground>
                    </View>
                    </TouchableOpacity>
                )}
                />
            </View>
        </View>

                  <View style={{width:390,height:1,backgroundColor:"gray",position:"absolute",top:"43.2%"}}>
                  </View>
                                      {/* Recently */}
        <View style={{height:170,width:"100%",marginBottom:40}}>
            <View style={{}}>
            <Text style={{color:"#fff",fontSize:20,marginBottom:20,marginLeft:30}}>Recently Added</Text>
            <View>
                <FlatList
                horizontal={true}
                data={recentData}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    style={{height:120,width:365,backgroundColor:"gray",marginHorizontal:5,borderRadius:10}}
                    onPress={()=>{navigation.navigate("eben",{data:item.data,main:item.mainLanguage,sec:item.secondLanguage,name:item.name,bgVideo:item.backgroundVideo,testLevel:item.testLevel})}}>
                        <ImageBackground source={{uri:item.backgroundImage,}}
                        resizeMode="cover"
                         style={{height:"100%",width:"100%"}}
                         imageStyle={{borderRadius:10,}}>
                            
                        <View style={{flexDirection:"row",position:"relative"}}>
                            <Text style={{fontSize:30,color:"#fff",position:"absolute",top:15,left:25,fontWeight:700}}>{item.name}</Text>
                            <View style={{height:25,width:50,backgroundColor:"rgba(0, 0, 0, 0.4)",justifyContent:"center",alignItems:"center",position:"absolute",top:87,left:10,borderRadius:10}}>
                                <Text style={{fontWeight:700,color:"#fff"}}>{item.data.length} ws.</Text>
                            </View>
                            <View style={{height:27,width:70,backgroundColor:"rgba(0, 0, 0, 0.4)",justifyContent:"center",alignItems:"center",position:"absolute",top:87,right:10,borderRadius:10}}>
                                <Text style={{color:"#fff"}}>{item.mainLanguage} {"&"} {item.secondLanguage}</Text>
                            </View>
                        </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                />
            </View>
            </View>
        </View>  


                                      {/* OwnLibrary */}
        <View style={{ height:400,
            width:"90%", }}>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontFamily:"Poppins-Bold",fontSize:23,marginLeft:30,margin:10,color:"#fff"}}>Your Libraries</Text>
                    <Image source={require("../assets/plus.png")} style={{height:40,width:40}} />
                </View>
                <FlatList
                style={{height:320,width:"100%"}}
                data={ownLibrary}
                contentContainerStyle={{height:400,width:"100%"}}
                
                renderItem={({item}) =>(

                    
                    
                    
                    
                    <TouchableOpacity 
                    
                    onPress={()=>{navigation.navigate("eben",{data:item.data,main:item.mainLanguage,sec:item.secondLanguage,name:item.name})}}
                    style={{
                        height:56,
                        backgroundColor:"rgba(98,98,98,0.5)",
                        flexDirection:"row",
                        borderRadius:20,
                        shadowColor: "#000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        
                        elevation: 1,
                        
                        marginBottom:10,
                        
                        
                        
                    }}>
                            
                        <View style={{height:"100%",
                            width:"90%",
                            justifyContent:"center",
                            alignItems:"center"}}>

                        
                            <Text style={{ fontSize:20,
                            color:"#fff"}}>{item.name}</Text>
                            <Text style={{color:"#fff"}}>{item.data.length} words</Text>
                        </View>
                        <View style={{flexDirection:"row",
                            height:"100%",
                            width:"10%",
                            alignItems:"center",
                            justifyContent:"flex-end",}}>
                            <View
                             style={{marginRight:10}}>
                                <Image source={require("../assets/feather.png")} style={{ margin:10,
                                    height:25,
                                    width:25,}}/>
                            </View>
                            
                        </View>
                        
                    </TouchableOpacity>
                            
                )}
                
                />

                
            </View> 


        <SearchLibrary
        searchLib={searchLib}
        setSearchLib={setSearchLib}
        />
        <AddLibrary
        addLibraryModal={addLibraryModal}
        setAddLibraryModal={setAddLibraryModal}/>
        <SettingsModal
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        />
        
        </ScrollView>  
        </SafeAreaView>
            
    )
}


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        width:"100%",
        height:"100%",
        backgroundColor:"#000"
        
    },
})




export default Main