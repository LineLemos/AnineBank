import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { ThemeProvider, useTheme } from "../components/Context";


export default function Buttons({ onPress }) {

  const { theme } = useTheme();

  const buttons = [
    {
      id: 1,
      title: "Pix",
      icon: <FontAwesome6 name="pix" size={20} color={theme.textColor} />,
    },
    {
      id: 2,
      title: "Pagar",
      icon: <FontAwesome5 name="barcode" size={20} color={theme.textColor} />,
    },
    {
      id: 3,
      title: "Pegar emprest",
      icon: (
        <FontAwesome6
          name="hand-holding-dollar"
          size={20}
          color={theme.textColor}
        />
      ),
    },
    {
      id: 4,
      title: "Transferir",
      icon: (
        <FontAwesome6
          name="money-bill-transfer"
          size={20}
          color={theme.textColor}
        />
      ),
    },
    {
      id: 5,
      title: "Recarga",
      icon: <FontAwesome5 name="mobile" size={20} color={theme.textColor} />,
    },
    {
      id: 6,
      title: "Depositar",
      icon: (
        <FontAwesome6
          name="money-bill-transfer"
          size={20}
          color={theme.textColor}
        />
      ),
    },
    {
      id: 7,
      title: "Caixinhas",
      icon: (
        <FontAwesome6
          name="circle-dollar-to-slot"
          size={20}
          color={theme.textColor}
        />
      ),
    },
    {
      id: 8,
      title: "Investir",
      icon: <FontAwesome5 name="signal" size={20} color={theme.textColor} />,
    },
  ];

  return (
    <View>
      <FlatList
        data={buttons}
        contentContainerStyle={{ paddingHorizontal: 8, alignItems: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => item.title === "Pix" && onPress()}
          >
            <View style={[styles.areaButton, theme.areaButton]}>
              {item.icon}
            </View>
            <Text
              style={[styles.labelButton, { color: theme.textColor }]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.myCardsWrapper}>
        <TouchableOpacity style={[styles.myCard, theme.areaButton]}>
          <FontAwesome5 name="credit-card" size={22} color={theme.textColor} />
          <Text style={[styles.myCards, { color: theme.textColor }]}>
            Meus Cartões
          </Text>
        </TouchableOpacity>
      </View>
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
    height: 73,
    width: 72,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  labelButton: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: 'center',
    width: 70,
    height: 55,
    
  },
    myCardsWrapper: {
        padding: 20,
    }, 

    myCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16,
        marginTop: 16,
    },

    myCards:{
      marginLeft: 15,
    }
});
