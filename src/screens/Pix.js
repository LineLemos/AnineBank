import { useState } from "react";
import { useTheme } from "../components/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSaldo } from "../components/SaldoContext";
import {
  Alert,
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Pix({ navigation }) {
  const { theme } = useTheme();
  const { saldo, setSaldo } = useSaldo();
  const [valorPix, setValorPix] = useState("");
  const [valorPix2, setValorPix2] = useState("");
  const [chavePix, setChavePix] = useState("");

  const handleInputChange = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const floatValue = parseFloat(cleanedValue) / 100;
    setValorPix(formatCurrency(cleanedValue));
    setValorPix2(floatValue);
  };

  const formatCurrency = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const floatValue = parseFloat(cleanedValue) / 100;
    return floatValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const saveSaldo = async (newSaldo) => {
    try {
      await AsyncStorage.setItem("saldo", newSaldo.toString());
      setSaldo(newSaldo);
    } catch (error) {
      console.error("Erro ao salvar saldo no AsyncStorage:", error);
    }
  };

  const sendPix = async () => {
    if (chavePix.length < 5) {
      Alert.alert("Aviso", "Digite nome e sobrenome");
      return;
    }
    const valor = parseFloat(valorPix2);
    if (isNaN(valor) || valor <= 0) {
      Alert.alert("Aviso", "Por favor, insira um valor válido para o PIX.");
      return;
    }

    if (saldo !== null && valor <= saldo) {
      const novoSaldo = saldo - valor;
      await saveSaldo(novoSaldo);
      Alert.alert("Sucesso", "Transferência realizada.");
      navigation.goBack();
    } else {
      Alert.alert("Aviso", "Saldo insuficiente.");
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.label, { color: theme.textColor }]}>Chave PIX:</Text>
      <TextInput
        style={[styles.input, { color: theme.textColor }]}
        placeholder="Digite a chave PIX"
        placeholderTextColor="#737373"
        value={chavePix}
        onChangeText={setChavePix}
      />
      <Text style={[styles.label, { color: theme.textColor }]}>
        Valor do PIX:
      </Text>
      <TextInput
        style={[styles.input, { color: theme.textColor }]}
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
