import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import { useRouter } from "expo-router";

const Separator = () => <View style={styles.separator} />;

export default function Index() {
  const arrowImg = "../assets/images/arrow.png";
  const mainPlayerImg = "../assets/images/playy.png";
  const articleImg = "../assets/images/articles.jpg";

  const router = useRouter();

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Navbar />
          <Image source={require(mainPlayerImg)} style={styles.mainPlayer} />
          <Separator />
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Pulsora</Text>
            <Text style={styles.subTitle}>Bienvenue</Text>
          </View>
          <Separator />
          <Text style={{ padding: 36 }}>
            Pulsora est un projet d’application web gratuite dédiée à la gestion
            des équipes sportives. Conçue pour les entraîneurs, les joueurs et
            les responsables de clubs, cet outil facilite l'organisation et la
            communication au sein des équipes. Elle permet aux fans de vos
            projets sportifs de suivre votre actualité, l’actualité des joueurs
            (blessures, sanctions...) qu’elle soit sportive ou extra-sportive au
            travers d’articles publiées par vos soins.
          </Text>
          <Separator />
          <View
            style={{
              position: "relative",
              borderWidth: 1,
              backgroundColor: "lightgray",
            }}
          >
            <Pressable onPress={() => router.push("/articles")}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 48,
                  padding: 8,
                  fontWeight: "800",
                  marginVertical: 6,
                }}
              >
                ARTICLES
              </Text>
              <ImageBackground
                source={require(articleImg)}
                style={{ height: 160 }}
              ></ImageBackground>
            </Pressable>
          </View>
          <Separator />
          <View
            style={{
              position: "relative",
              borderWidth: 1,
              backgroundColor: "lightgray",
            }}
          >
            <Pressable onPress={() => router.push("/equipes")}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 48,
                  padding: 8,
                  fontWeight: "800",
                  marginVertical: 6,
                }}
              >
                ÉQUIPES
              </Text>
              <ImageBackground
                source={require(articleImg)}
                style={{ height: 160 }}
              ></ImageBackground>
            </Pressable>
          </View>
          <Separator />
          <View
            style={{
              position: "relative",
              borderWidth: 1,
              backgroundColor: "lightgray",
            }}
          >
            <Pressable onPress={() => router.push("/saison")}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 48,
                  padding: 8,
                  fontWeight: "800",
                  marginVertical: 6,
                }}
              >
                SAISON
              </Text>
              <ImageBackground
                source={require(articleImg)}
                style={{ height: 160 }}
              ></ImageBackground>
            </Pressable>
          </View>
          <Separator />
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
  },
  mainPlayer: {
    height: 180,
    width: 180,
    marginHorizontal: "auto",
    marginTop: 16,
  },
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
    bottom: -150,
    backgroundColor: "lightblue",
  },
});
