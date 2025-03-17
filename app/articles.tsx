import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import articles from "../assets/articles.json";

type ArticleType = {
  id: number;
  title: string;
  content: string;
};

export default function Articles() {
  useEffect(() => {
    console.log(typeof articles)
  }, [])
  return (
    <>
      <Navbar />
      {/* <Text>Nutrition</Text>
      <Text>Petits Conseils Nutrition</Text>
      <Text>Équipement</Text>
      <Text>
        Les équipements de football sont essentiels pour assurer la sécurité, la
        performance et le confort des joueurs tout au long du match. Chaque
        élément est conçu pour répondre aux besoins spécifiques du jeu et des
        conditions de terrain.
      </Text> */}
      <FlatList data={articles} renderItem={(item) => <Text key={item.item.id}>{item.item.content}</Text>}/>
    </>
  );
}
