import { useEffect, useState } from "react";
import { View , Text , StyleSheet} from "react-native";


const UseCountdown = (props) => {
    const [seconds,setSeconds] = useState(180)
    const [showTime,setShowTime] = useState("")
    useEffect(()=>{
        if(seconds < 0 ) return props.setShowModal(true)

        const timeout = setTimeout(()=>{
            setSeconds(seconds-1)
            const min = Math.floor(seconds/60)
            const sec = seconds%60
            if(min>9){
                sec >= 10 ? setShowTime(`${min} : ${sec}`) : setShowTime(`${min} : 0${sec}`)
            }else if(min>0){
                sec >= 10 ? setShowTime(`0${min} : ${sec}`) : setShowTime(`0${min} : 0${sec}`)
            }else{
                sec >= 10 ? setShowTime(`00 : ${sec}`) : setShowTime(`00 : 0${sec}`)
            }

        },1000)
        
    return ()=> clearTimeout(timeout)
    },[seconds])

    return (
        <View style={styles(props).container}>
            <Text style={styles(props).text}>
                {showTime}
            </Text>
        </View>
    )
}


const styles = (props) => StyleSheet.create({
    container:{
        backgroundColor:props.backgroundColor,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:props.fontSize,
        color:props.color
    }
})

export default UseCountdown