import Navbar from "@/components/Navbar";
import { Text, View, StyleSheet, FlatList, SectionList } from "react-native";
import jsonArticles from "../assets/articles.json";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

type Section = {
  title: string;
  subtitle: string;
  data: { id: number; title: string; content: string }[];
};

const Separator = () => <View style={styles.separator} />;

export default function Articles() {
  const [sections, setSections] = useState<Section[]>([]);
  useEffect(() => {
    setSections(jsonArticles.sections);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <SectionList
          nestedScrollEnabled={true}
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <>
              <Navbar />
            </>
          }
          renderItem={(item) => (
            <View style={styles.container} key={item.index}>
              <View style={styles.articleCard}>
                <Text style={styles.sectionTitle}>{item.item.title}</Text>
                <Text style={styles.sectionText}>{item.item.content}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 16,
  },
  container: {
    width: 360,
    margin: "auto",
  },

  sectionTheme: {
    fontSize: 28,
    color: "#1E4B9B",
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    color: "#5CB5FE",
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    borderColor: "#DAEEFF",
    backgroundColor: "#DAEEFF",
    borderWidth: 3,
    borderRadius: 10,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
    color: "#152B56",
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 22,
    textAlign: "justify",
    borderColor: "#DAEEFF",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#DAEEFF",
  },
  articleCard: {
    padding: 16,
    margin: 12,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
});
