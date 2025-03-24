import Navbar from "@/components/Navbar";
import { FlatList, Text, View } from "react-native";
import gamesJson from "../assets/matchs.json";
import { useEffect, useState } from "react";

type Game = {
  id: number;
  homeTeam: number;
  awayTeam: number;
  homeScore: number;
  awayScore: number;
};

export default function Saison() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function get() {
      setGames(gamesJson);
    }

    get();
  }, []);
  return (
    <FlatList
      ListHeaderComponent={<Navbar />}
      data={games}
      nestedScrollEnabled={true}
      keyExtractor={(game) => game.id.toString()}
      renderItem={(game) => <View></View>}
    />
  );
}
