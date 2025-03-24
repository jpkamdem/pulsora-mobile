import { useRouter, usePathname } from "expo-router";
import { useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";

export default function Navbar() {
  const image = "../assets/images/pulsora-logo.png";
  const router = useRouter();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  function toggleMenu() {
    if (menuIsOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 150,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }

    setMenuIsOpen(!menuIsOpen);
  }

  const pathName = usePathname();

  function getTitle() {
    switch (pathName) {
      case "/":
        return "Accueil";
      case "/articles":
        return "Articles";
      case "/equipes":
        return "Équipes";
      case "/saison":
        return "Saison";
      default:
        return "Page";
    }
  }

  return (
    <>
      <View style={styles.navbar}>
        <Pressable style={styles.image} onPress={() => router.push("/")}>
          <Image source={require(image)} style={styles.image} />
        </Pressable>
        <Text>{getTitle()}</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <View style={styles.burgerIcon}>
            <View style={styles.burgerLine}></View>
            <View style={styles.burgerLine}></View>
            <View style={styles.burgerLine}></View>
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.menu, { height: animation }]}>
        <View style={styles.menuItem}>
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push("/articles")}
          >
            <Text>Articles</Text>
          </Pressable>
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push("/equipes")}
          >
            <Text>Équipes</Text>
          </Pressable>
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push("/saison")}
          >
            <Text>Saison</Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  burgerIcon: {
    width: 30,
    height: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 109
  },
  burgerLine: {
    width: 28,
    height: 3,
    backgroundColor: "black",
    zIndex: 110
  },
  menu: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  menuItem: {
    padding: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
});
