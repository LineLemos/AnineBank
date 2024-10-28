import { useState } from "react";
import { ThemeProvider, useTheme } from "../components/Context";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Pix({ route, navigation }) {

  const { theme } = useTheme();
  const { saldo, setSaldo } = route.params;
  const [valorPix, setValorPix] = useState("");
  const [valorPix2, setValorPix2] = useState();
  const [chavePix, setChavePix] = useState("");

  const formatCurrency = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = (cleanedValue / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };

  const handleInputChange = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const floatValue = parseFloat(cleanedValue) / 100;

    setValorPix2(floatValue);
    setValorPix(formatCurrency(value));
  };

  const sendPix = () => {
    const valor = parseFloat(valorPix2);
    const valorSaldo = parseFloat(saldo);
    console.log("Transferência: ", valor);
    console.log("Saldo: ", valorSaldo);
    console.log("Transferência 2: ", valorPix2);

    if (valor <= saldo) {
      setSaldo(saldo - valor);
      navigation.goBack();
    } else {
      alert("Saldo insuficiente.");
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.label, { color: theme.textColor }]}>Chave PIX:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a chave PIX"
        placeholderTextColor="#737373"
        value={chavePix}
        onChangeText={setChavePix}
      />
      <Text style={[styles.label, { color: theme.textColor }]}>
        Valor do PIX:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        placeholderTextColor="#737373"
        value={valorPix}
        keyboardType="numeric"
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={sendPix}>
        <Text style={styles.buttonText}>Enviar PIX</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    marginBottom: 130,
  },

  label: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#737373",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginBottom: 30,
  },

  button: {
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#6b21a8",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
