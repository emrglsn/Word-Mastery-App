import { View , Text , StyleSheet} from "react-native"

const ProgressBar = (props) => {
    return (
        
        <View style={styles(props).container}>
            <View style={styles(props).inlineContainer}>
            </View>
                <Text style={styles(props).text}>{props.text}</Text>

        </View>
        
    )
}

const styles = (props) => StyleSheet.create({
    container:{
        backgroundColor:props.color,
        width:`${props.width}%`,
        height:props.height,
        borderRadius:10,
        justifyContent:"center"
        
        
        
        
    },
    inlineContainer:{
        backgroundColor:props.progressColor,
        width:`${props.progress}%`,
        height:props.height,
        borderRadius:10,
        
    },
    text:{
        color:props.textColor,
        position:"absolute",
        left:"45%",
        fontSize:10

    }
})


export default ProgressBar