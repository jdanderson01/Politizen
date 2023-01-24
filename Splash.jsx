import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Button } from "react-native";

export default function Splash(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/politizen-logo.png")}
      />
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    height: 370,
    width: 371,
  },
});
