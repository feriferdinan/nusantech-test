import  React,{useState,useEffect} from "react";
import { View,  Image ,TouchableOpacity,StyleSheet,StatusBar} from "react-native";
import { connect } from 'react-redux'
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { theme } from "../utils/theme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
// import { SharedElement } from 'react-navigation-shared-element';
import {setCheck,setValue} from "../store/actions/forms";
import {showErrorToast} from "../components/Toast"
import  IconAnt from "react-native-vector-icons/AntDesign";
import CheckBox from '@react-native-community/checkbox';


function HomeScreen({forms,setCheck,setValue}) {
  const [total, setTotal] = useState(0);
  const [typeCalculate, setTypeCalculate] = useState("+");
  let activeInput = Object.values(forms.data).filter(e => e.is_checked) 
  let values = activeInput.map(e => parseFloat(e.value))

  useEffect(() => {
    let allTotal = 0
    console.log(values);
    values.map((val,index) => { 
      if(!isNaN(val)){
        if(index === 0){
          allTotal += val
        }else{
          switch (typeCalculate) {
            case "+":
              allTotal += val
              break;
            case "-":
              allTotal -=  val
              break;
            case "/":
              allTotal = allTotal / val
              break;
            case "x":
              allTotal = allTotal * val
              break;
            }
        }
    }
    })
    setTotal(allTotal)
  }, [forms,typeCalculate]);

  onChecked = ({id,is_checked}) => {
      if(is_checked && activeInput.length <= 2){
        showErrorToast("Can't turn off less than 2!")
      }
     setCheck({id,is_checked: !is_checked})
  }
  return (
    <View style={styles.container}>
        {
          Object.values(forms.data).map(({id, value, is_checked})=> (
            <View key={id}  style={{flexDirection:"row",alignItems:"center"}}>
            <TextInput
                editable={is_checked}
                value={value}
                onChangeText={value => setValue({id,value})}
                keyboardType={"numeric"}
                returnKeyType={"done"}
                style={{width:wp(80)}}
            />
             <CheckBox
                onPress={()=>alert("ok")}
                tintColors={{
                  true:theme.colors.primary,
                }}
                value={is_checked}
                style={{marginLeft:wp(-8)}}
                onValueChange={() => onChecked({id, is_checked})}
            />
           </View>
          ))
        }
        <View style={styles.wrapButtons}>
            {
              forms.buttons.map(e=>(
                <Button 
                  key={e.id} 
                  onPress={()=>setTypeCalculate(e.value)}
                  disabled={typeCalculate === e.value} 
                  mode={typeCalculate === e.value ? "default" : "outlined"} 
                  style={styles.btn}
                  >
                  {e.label}
                </Button>
              ))
            }
        </View>
        <View style={styles.divider} />
        <Text size={18}>Hasil: <Text type="bold" size={20}>{total}</Text></Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    backgroundColor:theme.colors.white,
  },
  btn:{
      flex:1,
      margin:6
  },
  wrapButtons:{ flexDirection:"row",marginHorizontal:-6},
  divider:{
      borderBottomColor:"#F0F0F0",
      borderBottomWidth:1,
      marginVertical:16
    }
})

const mapStateToProps = state =>({
    forms:state.forms
})
const mapDispatchToProps = dispatch =>({
    setValue:data=>dispatch(setValue(data)),
    setCheck:data=>dispatch(setCheck(data)),
})
// Exports
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);