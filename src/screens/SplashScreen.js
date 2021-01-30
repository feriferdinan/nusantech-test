import React from 'react';
import { StatusBar,View ,StyleSheet} from 'react-native'
import Text from "../components/Text";
import { connect } from 'react-redux';
import { setSplash } from "../store/actions/apps";
 function SpashScreen({setSplash}) {
    React.useEffect(() =>{
        setTimeout(setSplash, 1000),
    []});
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle={"dark-content"} />
            <Text>Wellcome</Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    },
});

const mapDispatchToProps = dispacth => {
    return {
        setSplash: ()=> dispacth(setSplash())
    }
}
export default connect(null,mapDispatchToProps)(SpashScreen)
