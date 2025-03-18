import Navbar from "@/components/Navbar";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import jsonArticles from "../assets/articles.json";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

const Separator = () => <View style={styles.separator} />;

type ArticleType = {
  id: number;
  title: string;
  content: string;
};

export default function Articles() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    async function get() {
      setArticles(jsonArticles);
    }

    get();
  }, []);

  return (
    <>
      <ScrollView>
        <SafeAreaProvider>
          <SafeAreaView>
            <ScrollView style={{ padding: 16 }}>
              <Navbar />
              <FlatList
                data={articles}
                renderItem={(article) => (
                  <View style={styles.container}>
                    <View key={article.item.id} style={[styles.articleCard]}>
                      <Text style={styles.sectionTitle}>
                        {article.item.title}{" "}
                      </Text>
                      <Text>{article.item.content}</Text>
                    </View>
                  </View>
                )}
              />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </ScrollView>
    </>
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  articleCard: {
    padding: 16,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
});
