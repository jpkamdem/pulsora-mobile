import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";

const Separator = () => <View style={styles.separator} />;

export default function Index() {
  const arrowImg = "../assets/images/arrow.png";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flexGrow: 1}}>
        <Navbar />
        <View style={{ backgroundColor: "gray" }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Image joueur de foot
          </Text>
        </View>
        <Separator />
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Pulsora</Text>
          <Text style={styles.subTitle}>Lorem</Text>
        </View>
        <Separator />
        <Pressable
          style={{
            padding: 4,
            backgroundColor: "blue",
            width: "20%",
            marginHorizontal: "auto",
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "800" }}
          >
            Découvrir
          </Text>
        </Pressable>
        <Separator />
        <Text style={{ padding: 36 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime quam quasi sunt nam, minima eius veritatis adipisci! Distinctio
          quam officia minima, voluptate repellat corporis voluptatum sed autem
          voluptas laboriosam dolor illo atque nisi illum ut. Iure blanditiis et
          sit! Rem doloribus fuga sit, eligendi sunt iure distinctio. Magni,
          harum!
        </Text>
        <Separator />
        <View style={{ position: "relative", borderWidth: 1, height: 160 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: "800",
              color: "gray",
              marginTop: 8,
            }}
          >
            Article
          </Text>
          <Image source={require(arrowImg)} style={styles.arrow} />
        </View>
        <Separator />
        <View style={{ position: "relative", borderWidth: 1, height: 160 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: "800",
              color: "gray",
              marginTop: 8,
            }}
          >
            Saison
          </Text>
          <Image source={require(arrowImg)} style={styles.arrow} />
        </View>
        <Separator />
        <View style={{ position: "relative", borderWidth: 1, height: 160 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: "800",
              color: "gray",
              marginTop: 8,
            }}
          >
            équipes
          </Text>
          <Image source={require(arrowImg)} style={styles.arrow} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
  },
  container: {},
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: "900",
  },
  subTitle: {
    fontSize: 36,
    color: "#1E4B9B",
    fontWeight: 600,
  },
  arrow: {
    height: 20,
    width: 20,
    position: "absolute",
    right: 10,
    bottom: 8,
    backgroundColor: "lightblue",
    padding: 8,
  },
});
