import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const image = "../assets/images/pulsora-logo.png"
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require(image)} style={styles.image}/>
        <Text>Accueil</Text>
        <Text>eee</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  navbar: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4
  },
  image: {
    width: 20,
    height: 20,
  }
});
