import { useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import Buttons from "../components/Buttons";


export default function Home({navigation}) {
  
    const [saldo, setSaldo] = useState(100);
    const handlePix = () => {navigation.navigate("Pix", {saldo, setSaldo})}

  return (
    <View style={styles.container}>
        <Text style={styles.account}>Conta</Text>
      <Text style={styles.account}>R${saldo}</Text>
      <Buttons onPress={handlePix} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: "#262626",
        height: '100%',
        padding: 20,
    
  },

  account:{
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  },
});

