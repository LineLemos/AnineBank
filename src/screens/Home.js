import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Buttons from "../components/Buttons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import {useTheme} from "../components/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSaldo } from "../components/SaldoContext";


  export default function Home({ navigation }) {
    const {saldo, setSaldo} = useSaldo();
    const { theme } = useTheme();


useEffect(() => {
  const loadSaldo = async () => {
    try {
      const savedSaldo = await AsyncStorage.getItem("saldo");
      if (savedSaldo !== null) {
        setSaldo(parseFloat(savedSaldo));
      } else {
        const defaultSaldo = 100;
        setSaldo(defaultSaldo);
        await AsyncStorage.setItem("saldo", defaultSaldo.toString());
      }
    } catch (error) {
      console.error("Erro ao carregar saldo:", error);
    }
  };
  loadSaldo();
}, []);


    const handlePix = () => {
      navigation.navigate("Pix");
    };


   const formatCurrency = (value) => {
     return value.toLocaleString("pt-BR", {
       style: "currency",
       currency: "BRL",
     });
   };


  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.account, { color: theme.textColor }]}>Conta</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color={theme.textColor} />
        </View>
      </View>

      <Text style={[styles.balance, { color: theme.textColor }]}>
        {formatCurrency(saldo)}
      </Text>
      <Buttons onPress={handlePix} />

      <View style={[styles.next, theme.next]}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Próximo pagamento
        </Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color={theme.textColor} />
        </View>

        <Text style={[styles.dateToPay, { color: theme.textColor }]}>
          Quinta-feira, 14 Nov
        </Text>
      </View>

      <View style={styles.bills}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Cartão de Crédito
        </Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 30,
            paddingTop: 30,
          }}
        >
          <FontAwesome6 name="angle-right" size={18} color={theme.textColor} />
        </View>
        <Text style={[styles.p, { color: theme.textColor }]}>Fatura atual</Text>
        <Text style={[styles.number, { color: theme.textColor }]}>
          R$1.200,00
        </Text>
        <Text style={[styles.p, { color: theme.textColor }]}>
          Limite disponível: R$700,00
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },

  balance: {
   
    paddingLeft: 20,
    fontWeight: 600,
    fontSize: 19,
  },

  account: {
    
    fontSize: 19,
    fontWeight: 600,
    paddingLeft: 20,
    marginTop: 20,
  },

  next: {
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    padding: 20,
    width: "100%",
    gap: 8,
  },

  title: {
    fontWeight: "600",
    fontSize: 20,
  },


  bills: {
    padding: 20,
    gap: 6,
  },

 
  number: {
    fontSize: 20,
    fontWeight: "600",
  },
});
