import { View , Text , Modal ,TouchableOpacity , TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';

const AddLibrary = ({addLibraryModal,setAddLibraryModal}) => {
    const navigation = useNavigation()
    
    return (
        <Modal visible={addLibraryModal} animationType="fade" transparent={true}>
            <View style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
                <View style={{height:250,width:300,backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",borderRadius:20,borderWidth:1,borderColor:"#fff"}}>
                    <View style={{}}>
                        <Text style={{color:"#fff",textAlign:"center"}}>New Library</Text>
                        <TextInput
                        style={{width:260,height:50,backgroundColor:"gray",borderRadius:10}}
                        placeholder="Library Name"/>
                        <TouchableOpacity
                        onPress={()=>{}}>
                            <View style={{height:50,width:100,backgroundColor:"brown"}}>
                                <Text style={{color:"#fff"}}>
                                    Add a background video
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{}}>
                            <View style={{height:50,width:100,backgroundColor:"purple"}}>
                                <Text style={{color:"#fff"}}>
                                    Create a library
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}
export default AddLibrary