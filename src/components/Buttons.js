import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function Buttons({ onPress }) {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="pix" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Área Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="barcode" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Pagar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="hand-holding-dollar" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Pegar{"\n"}emprést</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Transferir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="mobile" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Recarga</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Depositar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome6 name="circle-dollar-to-slot" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Caixinhas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="signal" size={24} color="#fff" />
        </View>
        <Text style={styles.labelButton}>Investir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  
  actionButton: {
    paddingTop: 100,
    paddingHorizontal: 6,
  },

  areaButton: {
    backgroundColor: "#737373",
    height: 76,
    width: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  labelButton: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
