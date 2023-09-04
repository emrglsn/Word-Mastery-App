
import { useEffect, useState } from "react";
import { View , Text , FlatList , SafeAreaView , TouchableOpacity , Image , StyleSheet, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import UseCountdown from "../functions/UseCountdown";
import ExamModal from "../modals/ExamModal";
import { Video } from "expo-av";

const Exam = ({route}) => {
    const navigation = useNavigation()

    const [answers,setAnswers] = useState(route.params.answerControl)
    const [answeredQs,setAnsweredQs] = useState(0)
    const [showModal,setShowModal] = useState(false)
    const [rCNum,setRCNum] = useState(0) 
    const [finished,setFinished] = useState(false)

    const highScoreSaver = () => {
        route.params.testLevel = rCNum
    }

    const handleChoise = (choiceId , value , correctValue) => {
         let updatedAnswers = [...answers]
         updatedAnswers[choiceId-1].answered = true 
         updatedAnswers[choiceId-1].choiceValue.choice = value
         updatedAnswers[choiceId-1].choiceValue.correct = correctValue

        
        //  if(correctValue){
        //     setRCNum(rCNum + 1)
        //  }
         setAnswers(updatedAnswers)

         let answerCount = answers.filter((e)=>{
            return e.answered === true
         })

         setAnsweredQs(answerCount.length)
         if(answeredQs===route.params.data.length-1){
            highScoreSaver()
            setShowModal(true)
         }

         
    }

    return (
    
        <View style={{height:"100%",width:"100%",backgroundColor:"black"}}>
            <SafeAreaView style={{height:"100%",width:"100%",alignItems:"center"}}>
            <Video
        
        style={{height:"103%",width:"100%",position:"absolute",top:0,left:0}}
        source={{
          uri: "https://player.vimeo.com/external/488705633.sd.mp4?s=b0e49c53d2bdf37bdeb49a3165292def54f4166a&profile_id=165&oauth2_token_id=57447761",
        }}
        useNativeControls={false}
        shouldPlay={true}
        resizeMode={"cover"}
        isLooping
        
      /> 

                <View style={{width:"90%",height:"13%",backgroundColor:"rgba(98,98,98,0.5)",}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={{position:"absolute",top:10}}>
                            <Ionicons name="chevron-back" size={54} color={"#fff"}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:25,color:"#fff",position:"absolute",right:110,top:5}}>Exam Started</Text>
                        <Text style={{fontSize:20,color:"#fff",position:"absolute",top:42,left:60}}>{answeredQs}/{route.params.data.length}</Text>
                        <Image source={require("../assets/dart.png")} style={{height:30,width:30,position:"absolute",left:100,top:40}}/>
                        <Text style={{fontSize:20,position:"absolute",right:70,top:43}}>
                            <UseCountdown
                            setShowModal={setShowModal}
                            fontSize={25}
                            color={"#fff"}
                            />
                        </Text>
                        <Image source={require("../assets/timer.png")} style={{height:55,width:55,position:"absolute",right:20,top:25}}/>
                </View>

                <View style={{width:"100%",height:"87%",alignItems:"center"}}>
                    <FlatList
                        
                        contentContainerStyle={{alignItems:"center"}}
                        data={route.params.data}
                        renderItem={({item})=>(
                            <View style={{height:160,width:360,marginVertical:20,alignItems:"center"}}>
                                <View style={{height:60,width:"100%",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(98,98,98,0.5)",margin:1}}>
                                    <Text style={{color:"#fff",fontSize:30}}>{item.question}</Text>
                                </View>
                                <View style={{height:50,width:"99%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                                    <TouchableOpacity 
                                    disabled={answers[item.id-1].answered?true:false}
                                    style={styles(item,answers,"a").topOptionsControl}
                                    onPress={()=>{handleChoise(item.id,"a",item.a.correct)}}>
                                        <Text style={{color:"#fff"}}>{item.a.choice}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    disabled={answers[item.id-1].answered?true:false}
                                    style={styles(item,answers,"b").topOptionsControl}
                                    onPress={()=>{handleChoise(item.id,"b",item.b.correct)}}>
                                        <Text style={{color:"#fff",}}>{item.b.choice}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    disabled={answers[item.id-1].answered?true:false}
                                    style={styles(item,answers,"c").topOptionsControl}
                                    onPress={()=>{handleChoise(item.id,"c",item.c.correct)}}>
                                        <Text style={{color:"#fff",}}>{item.c.choice}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{height:50,width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                                    <TouchableOpacity 
                                    disabled={answers[item.id-1].answered?true:false}
                                    style={styles(item,answers,"d").bottomOptionsControl}
                                    onPress={()=>{handleChoise(item.id,"d",item.d.correct)}}>
                                        <Text style={{color:"#fff",fontSize:15}}>{item.d.choice}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    disabled={answers[item.id-1].answered?true:false}
                                    style={styles(item,answers,"e").bottomOptionsControl}
                                    onPress={()=>{handleChoise(item.id,"e",item.e.correct)}}>
                                        <Text style={{color:"#fff",fontSize:15}}>{item.e.choice}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        />
                </View>
                <ExamModal
                showModal={showModal}
                setShowModal={setShowModal}
                rCNum={rCNum}
                testLevel={route.params.testLevel}
                questions={route.params.data.length}
                />
            </SafeAreaView>
        </View>
   
    )
    
}


const styles = (item,answers,letter) => StyleSheet.create({
    topOptionsControl : {
        width:115,
        height:45,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:(answers[item.id-1].answered)&&(answers[item.id-1].choiceValue.choice===letter)?(answers[item.id-1].choiceValue.correct?"rgba(122, 168, 116, 0.9)":"rgba(255, 0, 0, 0.7)"):"rgba(98,98,98,0.5)"
    },
    bottomOptionsControl:{
        width:172,
        height:45,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:(answers[item.id-1].answered)&&(answers[item.id-1].choiceValue.choice===letter)?(answers[item.id-1].choiceValue.correct?"rgba(122, 168, 116, 0.9)":"rgba(255, 0, 0, 0.7)"):"rgba(98,98,98,0.5)"
    }
})

export default Exam