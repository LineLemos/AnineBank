import { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

export default function Pix({route, navigation}){

    const {saldo, setSaldo} = route.params;
    const [valorPix, setValorPix] = useState("");
    const [chavePix, setChavePix] = useState("");


    
    
    const sendPix = () => { 
        const valor = parseFloat(valorPix);

        if(valor <= saldo){
            setSaldo(saldo - valor)
            navigation.goBack()

        }else{
            alert("Saldo insuficiente.")
        }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Chave PIX:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a chave PIX"
          placeholderTextColor="#737373"
          value={chavePix}
          onChangeText={setChavePix}
        />
        <Text style={styles.label}>Valor do PIX:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          placeholderTextColor="#737373"
          value={valorPix}
          keyboardType="numeric"
          onChangeText={setValorPix}
        />
        <Button
          style={styles.button}
          title="Enviar PIX"
          onPress={sendPix}
          color="#6b21a8"
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#262626",
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color:"#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#737373",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color:"#fff",
  },


});
