import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Buttons from "../components/Buttons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [saldo, setSaldo] = useState(100);
  const handlePix = () => {
    navigation.navigate("Pix", { saldo, setSaldo });
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.account}>Conta</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color="#fff" />
        </View>
      </View>

      <Text style={styles.balance}>{formatCurrency(saldo)}</Text>
      <Buttons onPress={handlePix} />

      <View style={styles.next}>
        <Text style={styles.title}>Próximo pagamento</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color="#fff" />
        </View>

        <Text style={styles.dateToPay}>Quinta-feira, 14 Nov</Text>
      </View>

      <View style={styles.bills}>
        <Text style={styles.title}>Cartão de Crédito</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color="#fff" />
        </View>
        <Text style={styles.p}>Fatura atual</Text>
        <Text style={styles.number}>R$1.200,00</Text>
        <Text style={styles.p}>Limite disponível: R$700,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    height: "100%",
  },

  balance: {
    color: "#fff",
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 19,
  },

  account: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    paddingLeft: 20,
    marginTop: 20,
  },

  next: {
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    padding: 20,
    width: "100%",
    gap: 8,
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  dateToPay: {
    color: "#fff",
  },

  bills: {
    padding: 20,
    gap: 6,
  },

  p: {
    color: "#737373",
  },

  number: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
