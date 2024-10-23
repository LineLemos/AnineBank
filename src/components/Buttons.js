import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function Buttons({ onPress }) {

  const buttons = [
    {
      id: 1,
      title: "Pix",
      icon: <FontAwesome6 name="pix" size={20} color="#fff" />,
    },
    {
      id: 2,
      title: "Pagar",
      icon: <FontAwesome5 name="barcode" size={20} color="#fff" />,
    },
    {
      id: 3,
      title: "Pegar emprest",
      icon: <FontAwesome6 name="hand-holding-dollar" size={20} color="#fff" />,
    },
    {
      id: 4,
      title: "Transferir",
      icon: <FontAwesome6 name="money-bill-transfer" size={20} color="#fff" />,
    },
    {
      id: 5,
      title: "Recarga",
      icon: <FontAwesome5 name="mobile" size={20} color="#fff" />,
    },
    {
      id: 6,
      title: "Depositar",
      icon: <FontAwesome6 name="money-bill-transfer" size={20} color="#fff" />,
    },
    {
      id: 7,
      title: "Caixinhas",
      icon:
        <FontAwesome6 name="circle-dollar-to-slot" size={20} color="#fff" />
    },
    {
      id: 8,
      title: "Investir",
      icon: <FontAwesome5 name="signal" size={20} color="#fff" />,
    },
  ];

  return (
    <View>
      <FlatList
        data={buttons}
        contentContainerStyle={{paddingHorizontal:8, alignItems:'center'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => item.title === "Pix" && onPress()}
          >
            <View style={styles.areaButton}>{item.icon}</View>
            <Text style={styles.labelButton} numberOfLines={2}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    paddingTop: 40,
    paddingHorizontal: 8,
    alignItems: 'center',
   
  },

  areaButton: {
    backgroundColor: "#262626",
    height: 73,
    width: 72,
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
    justifyContent: "center",
    alignItems: 'center',
    width: 70,
    height: 55,
    
  },

  cardButton: {
    backgroundColor: "#262626",
    width: 328,
    height: 55,
    flexDirection: "row",
    borderRadius: 16,
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  areaCardButton: {
    padding: 16,
  },

  labelCardButton: {
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 14,
  },
});
