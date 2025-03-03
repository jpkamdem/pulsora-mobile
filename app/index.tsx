import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [animation] = useState(new Animated.Value(0))
  
  const image = "../assets/images/pulsora-logo.png";

  function toggleMenu() {
    if (menuIsOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 150,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false
      }).start()
    }

    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require(image)} style={styles.image} />
        <Text>Accueil</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <View style={styles.burgerIcon}>
            <View style={styles.burgerLine}></View>
            <View style={styles.burgerLine}></View>
            <View style={styles.burgerLine}></View>
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.menu, {height: animation}]}>
        <View style={styles.menuItem}><Text>Bouton de navigation 1</Text></View>
        <View style={styles.menuItem}><Text>Bouton de navigation 2</Text></View>
        <View style={styles.menuItem}><Text>Bouton de navigation 3</Text></View>
      </Animated.View>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: 20,
    height: 20,
  },
  burgerIcon: {
    width: 30,
    height: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  burgerLine: {
    width: 30,
    height: 4,
    backgroundColor: "black",
  },
  menu: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  }
});
