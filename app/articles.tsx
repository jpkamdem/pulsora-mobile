import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import articles from "../assets/articles.json";

const Separator = () => <View style={styles.separator} />;

type ArticleType = {
  id: number;
  title: string;
  content: string;
};

export default function Articles() {

  const getArticlesByGroup = (minId: number, maxId: number) => {
    return articles.filter((article: ArticleType) => article.id >= minId && article.id <= maxId);
  };

 
  useEffect(() => {
    console.log(typeof articles);
    console.log(articles);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollView style={{ padding: 16 }}>
      <View style={styles.contenair}>
        <Text style={styles.sectionTitle}>Nutrition</Text>
        <Text style={styles.sectionSubtitle}>Petits Conseils Nutrition</Text>

        {getArticlesByGroup(0, 1).map((article) => (
          <View key={article.id} style={styles.articleCard}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text>{article.content}</Text>
          </View>
        ))}
      </View>

        <Separator />

        <View style={styles.contenair}>
        <Text style={styles.sectionTitle}>Équipement</Text>
        <Text style={styles.sectionText}>
          Les équipements de football sont essentiels pour assurer la sécurité, la
          performance et le confort des joueurs tout au long du match. Chaque
          élément est conçu pour répondre aux besoins spécifiques du jeu et des
          conditions de terrain.
        </Text>
        {getArticlesByGroup(2, 6).map((article) => (
          <View key={article.id} style={styles.articleCard}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text>{article.content}</Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 16,
  },
  contenair:{
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  articleCard: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: "center",
  },
});
