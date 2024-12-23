import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar} from "react-native";
import Home from "./src/screens/Home.js";
import Pix from "./src/screens/Pix.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useTheme, ThemeProvider } from "./src/components/Context";
import { SaldoProvider } from "./src/components/SaldoContext";



const Stack = createStackNavigator();

const PixHeader = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text
      style={{
        color: "#fff",
        fontSize: 18,
        marginRight: 16,
        fontWeight: "600",
      }}
    >
      Área Pix
    </Text>
    <FontAwesome6 name="pix" size={22} color="#fff" />
  </View>
);

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <FontAwesome5
        name={theme.textColor === "#000" ? "sun" : "moon"}
        size={20}
        color="#fff"
        style={{ marginHorizontal: 10 }}
      />
    </TouchableOpacity>
  );
};

export default function App() {

  

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
  }, []);

  return (
    <SaldoProvider>
      <ThemeProvider>
        <NavigationContainer style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#6b21a8" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: () => (
                  <View
                    style={{
                      backgroundColor: "#6b21a8",
                      padding: 8,
                      height: 80,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("./assets/cliente.jpeg")}
                      style={{
                        width: 55,
                        height: 55,
                        borderRadius: 50,
                        marginLeft: 8,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 20,
                        paddingTop: 20,
                        gap: 8,
                      }}
                    >
                      <ThemeToggleButton />
                      <TouchableOpacity>
                        <FontAwesome5
                          name="eye"
                          size={20}
                          color="#fff"
                          style={{ marginHorizontal: 10 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <FontAwesome5
                          name="question-circle"
                          size={20}
                          color="#fff"
                          style={{ marginHorizontal: 10 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
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
            <Stack.Screen
              name="Pix"
              component={Pix}
              options={{
                headerStyle: {
                  backgroundColor: "#6b21a8",
                  height: 100,
                },
                headerTintColor: "#fff",

                headerTitle: () => <PixHeader />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SaldoProvider>
  );
  
}

const styles = StyleSheet.create({});
