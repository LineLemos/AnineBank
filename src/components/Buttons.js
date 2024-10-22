import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function Buttons({ onPress }) {
  return (
    <View>
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="pix" size={23} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Área Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="barcode" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Pagar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="hand-holding-dollar" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Pegar{"\n"}emprést</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="money-bill-transfer" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Transferir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="mobile" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Recarga</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="money-bill-transfer" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Depositar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="circle-dollar-to-slot" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Caixinhas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="signal" size={20} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Investir</Text>
      </TouchableOpacity>
    </ScrollView>

      <TouchableOpacity style={styles.cardButton}>
        <View style={styles.areaCardButton}>
          <FontAwesome5 name="credit-card" size={20} color="#fff" />
        </View>
        <Text style={styles.labelCardButton}>Meus cartões</Text>
      </TouchableOpacity>
    </View>

    
  );
}
const styles = StyleSheet.create({

    container:{
       
    },
  actionButton: {
    paddingTop: 40,
    paddingHorizontal: 7,

  },

  areaButton: {
    backgroundColor: "#737373",
    height: 70,
    width: 69,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  labelButton: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "bold",
    justifyContent: 'space-between',
    
  },

  cardButton: {
    backgroundColor: "#737373",
    width: 328,
    height: 55,
    flexDirection: 'row',
    borderRadius: 16,
    gap: 10,
    marginTop: 30,
    
    
  },

  areaCardButton: {
    padding: 16,
  },

  labelCardButton:{
    color: "#fff",
    fontWeight: 'bold',
    paddingTop: 14,
  },
});
