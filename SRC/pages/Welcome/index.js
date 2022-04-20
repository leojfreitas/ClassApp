import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';


export default function Welcome() {
  return (
    <View style={styles.container}>
     
        <View style={styles.containerLogo}> 

          <Image
          source={require('../../assets/logo.png')}
          style={{width: '100%'}}
          
          />
          <View style={styles.containerForm}>
            
          </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})