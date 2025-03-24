import Navbar from "@/components/Navbar";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import jsonArticles from "../assets/articles.json";
import jsonExercices from "../assets/articlesExercice.json";
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
  const [exercices, setExercices] = useState<ArticleType[]>([]);

  useEffect(() => {
    async function get() {
      setArticles(jsonArticles);
    }

    get();
  }, []);

  useEffect (() => {
    async function get() {
      setExercices(jsonExercices);
    }

    get();
  }, []);

  return (
      <ScrollView style={{ padding: 16 }}>
        <SafeAreaProvider>
          <SafeAreaView>
            <Navbar />
            <Text style={styles.sectionTheme}>NUTRITION</Text>
            <Text style={styles.sectionSubtitle}>Quelques petits conseils à suivre</Text>
            <FlatList
              data={articles}
              renderItem={(article) => (
                <View style={styles.container}>
                  <View key={article.item.id} style={[styles.articleCard]}>
                    <Text style={styles.sectionTitle}>
                      {article.item.title}{" "}
                    </Text>
                    <Text style={styles.sectionText}>{article.item.content}</Text>
                  </View>
                </View>
              )}
            />
            <Separator/>
            <Text style={styles.sectionTheme}>EXERCICES</Text>
            <Text style={styles.sectionSubtitle}>La préparation ne se fait pas uniquement sur le terrain</Text>
            <FlatList
              data={exercices}
              renderItem={(article) => (
                <View style={styles.container}>
                  <View key={article.item.id} style={[styles.articleCard]}>
                    <Text style={styles.sectionTitle}>
                      {article.item.title}{" "}
                    </Text>
                    <Text style={styles.sectionText}>{article.item.content}</Text>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </ScrollView>
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
    color:"#5CB5FE",
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
