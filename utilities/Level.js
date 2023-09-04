import { View } from "react-native";

const Level = ({size,borderWidth,innerColor1,innerColor2,innerColor3,backgroundColor,borderColor}) => {
    return (
        <View style={{height:size,width:size,backgroundColor:backgroundColor,justifyContent:"center",alignItems:"flex-end",flexDirection:"row"}}>
            <View style={{height:(size/10)*4,width:size/5,borderWidth:borderWidth,borderRadius:"20%",borderColor:borderColor,marginBottom:"5%",marginHorizontal:"2%"}}>
                <View style={{height:"100%",width:"100%",backgroundColor:innerColor1,borderRadius:"20%"}}></View>
            </View>
            <View style={{height:(size/10)*6,width:size/5,borderWidth:borderWidth,borderRadius:"20%",borderColor:borderColor,marginBottom:"5%",marginHorizontal:"2%"}}>
                <View style={{height:"100%",width:"100%",backgroundColor:innerColor2,borderRadius:"20%"}}></View>
            </View>
            <View style={{height:(size/10)*8,width:size/5,borderWidth:borderWidth,borderRadius:"20%",borderColor:borderColor,marginBottom:"5%",marginHorizontal:"2%"}}>
                <View style={{height:"100%",width:"100%",backgroundColor:innerColor3,borderRadius:"20%"}}></View>
            </View>



        </View>
    )
}

export default Level