import { View , Text , Modal ,TouchableOpacity , FlatList, Image} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const AchievementModal = ({showAchModal,setShowAchModal,trophies}) => {
    return (
        <Modal visible={showAchModal} animationType="slide" transparent={true}>
            <View style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center"}}>
                <View style={{height:600,width:330,backgroundColor:"rgba(0,0,0,0.9)",borderRadius:25,alignItems:"center"}}>
                    <View style={{width:"100%",height:60,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{setShowAchModal(false)}}
                        style={{position:"absolute",left:16,top:12}}>
                            <FontAwesome5 name="times" size={40} color={"#fff"}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:24,color:"#fff"}}>Achievements</Text>
                    </View>
                    <View style={{width:"100%",height:"88%",marginBottom:3}}>

                        <FlatList
                        data={trophies}
                        numColumns={3}
                        
                        renderItem={({item})=>(
                            <View 
                            style={{height:150,width:100,backgroundColor:"rgba(69, 69, 69, 0.6)",justifyContent:"center",alignItems:"center",margin:5,opacity:item.achieved?1:0.6}}>
                                <Image source={item.src} style={{height:80,width:80,marginBottom:5}}/>
                                <Text style={{textAlign:"center",color:"#fff",}}>{item.text}</Text>
                            </View>
                        )}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default AchievementModal