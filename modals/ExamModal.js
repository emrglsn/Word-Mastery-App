import { View , Text , Modal ,TouchableOpacity ,} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";

const ExamModal = (props) => {
    const navigation = useNavigation()
    return (
        <Modal visible={props.showModal} animationType="fade" transparent={true}>
            <View style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
                <View style={{height:250,width:300,backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",borderRadius:20}}>
                    <View style={{height:120,width:250,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:25,textAlign:"center",color:"#fff"}}>Congratulations on completing the exam! You did a fantastic job.</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Image source={require("../assets/tick.png")} style={{height:30,width:30,marginRight:5}}/>
                        <Text style={{fontSize:17,color:"#fff"}}>{props.rCNum} correct out of {props.questions} questions!</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Image source={require("../assets/cup.png")} style={{width:40,height:40}}/>
                        <Text style={{fontSize:20,color:"#fff"}}>High Score : {props.testLevel}</Text>
                    </View>

                    <TouchableOpacity 
                    onPress={()=>{navigation.goBack()}}
                    style={{height:50,width:100,backgroundColor:"rgba(69, 69, 69, 0.6)",justifyContent:"center",alignItems:"center",borderRadius:5}}>
                        <Image source={require("../assets/6646031_essentials_home_house_ui_icon.png")} style={{height:40,width:40}}/>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

export default ExamModal