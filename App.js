import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Home from "./src/screens/Home.js";
import Pix from "./src/screens/Pix.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => (
              <View
                style={{
                  backgroundColor: "#8A19D6",
                  padding: 10,
                  height: 130,
                  flexDirection: 'row',
                  alignItems:'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  source={require("./assets/cliente.jpeg")}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 50,
                    marginTop: 40,
                  }}
                />
                <View style={{ flexDirection: "row", alignItems:'center', padding: 20, paddingTop: 70, gap:10}}>
                  <TouchableOpacity onPress={() => alert("Ícone 1")}>
                    <FontAwesome5
                      name="eye"
                      size={20}
                      color="#fff"
                      style={{ marginHorizontal: 10 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert("Ícone 2")}>
                    <FontAwesome5
                      name="question-circle"
                      size={20}
                      color="#fff"
                      style={{ marginHorizontal: 10 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert("Ícone 3")}>
                    <FontAwesome5
                      name="check-square"
                      size={20}
                      color="#fff"
                      style={{ marginHorizontal: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
        <Stack.Screen name="Pix" component={Pix} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
