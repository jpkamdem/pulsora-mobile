import Navbar from "@/components/Navbar";
import { FlatList, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import gamesJson from "../assets/matchs.json";
import teamsJson from "../assets/teams.json";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Game = {
  id: number;
  homeTeam: number;
  awayTeam: number;
  date: string;
  homeGoals: number[];
  awayGoals: number[];
};

type Team = {
  id: number;
  name: string;
  players: { id: number; firstname: string; lastname: string; position: string; number: number }[];
};

export default function Saison() {
  const [games, setGames] = useState<Game[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function get() {
      setGames(gamesJson);
      setTeams(teamsJson);
    }
    get();
  }, []);

  const getTeamNameById = (teamId: number): string => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.name : "Équipe inconnue";
  };

  const getPlayerNameById = (playerId: number): string => {
    const player = teams.flatMap((team) => team.players).find((player) => player.id === playerId);
    return player ? `${player.firstname} ${player.lastname}` : "Joueur inconnu";
  };

  const calculateScore = (goals: number[]): number => {
    return goals.length;
  };

  const renderGame = ({ item }: { item: Game }) => {
    const homeTeamName = getTeamNameById(item.homeTeam);
    const awayTeamName = getTeamNameById(item.awayTeam);

    const homeScore = calculateScore(item.homeGoals);
    const awayScore = calculateScore(item.awayGoals);

    const homeScorers = item.homeGoals.map((goalId) => getPlayerNameById(goalId));
    const awayScorers = item.awayGoals.map((goalId) => getPlayerNameById(goalId));

    return (
      <View style={styles.matchContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.matchText}>
          {homeTeamName} {homeScore} - {awayScore} {awayTeamName}
        </Text>

        <View style={styles.scoreContainer}>
          <View style={styles.scorerLeft}>
            <Text style={styles.scorers}>Buteurs à domicile :</Text>
            {homeScorers.length > 0 ? (
              homeScorers.map((scorer, index) => (
                <View key={index} style={styles.scorer}>
                  <Text style={styles.scorerName}>{scorer}</Text>
                  <Image source={require("../assets/images/ballon.png")} style={styles.ballIcon} />
                </View>
              ))
            ) : (
              <Text>Aucun buteur</Text>
            )}
          </View>

          <View style={styles.scorerRight}>
            <Text style={styles.scorers}>Buteurs à l'extérieur :</Text>
            {awayScorers.length > 0 ? (
              awayScorers.map((scorer, index) => (
                <View key={index} style={styles.scorer}>
                  <Text style={styles.scorerName}>{scorer}</Text>
                  <Image source={require("../assets/images/ballon.png")} style={styles.ballIcon} />
                </View>
              ))
            ) : (
              <Text>Aucun buteur</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Navbar />
        <Text style={styles.header}>Résultats de la Saison</Text>
        <FlatList
          data={games}
          nestedScrollEnabled={true}
          keyExtractor={(game) => game.id.toString()}
          renderItem={renderGame}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    paddingVertical: 20,
    backgroundColor: "#ecf0f1",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  matchContainer: {
    padding: 15,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#888",
    textAlign: "center",
  },
  matchText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  scorerLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  scorerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  scorers: {
    fontSize: 16,
    marginTop: 5,
    color: "#333",
  },
  scorer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  scorerName: {
    fontSize: 14,
    color: "#333",
  },
  ballIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
});
