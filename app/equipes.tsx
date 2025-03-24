import Navbar from "@/components/Navbar";
import { FlatList, Text, View } from "react-native";
import teamJson from "../assets/teams.json";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Separator = () => <View style={styles.separator} />;

type Player = {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  number: number;
};

type Team = {
  id: number;
  name: string;
  players: Player[];
};

export default function Equipes() {
  const [teams, setTeams] = useState<Team[]>([]);

  function position(pos: string) {
    const positions: { [key: string]: string } = {
      GK: "Gardien",
      DEF: "Défenseur",
      MF: "Milieu",
      FW: "Attaquant",
    };
    return positions[pos] || "Erreur";
  }

  useEffect(() => {
    setTeams(teamJson);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Navbar />
        <Text style={styles.header}>Liste des équipes</Text>
        <Separator />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={teams}
          renderItem={({ item }) => (
            <View style={styles.teamContainer}>
              <Text style={styles.teamName}>{item.name}</Text>
              <View style={styles.playersList}>
                {item.players.map((player) => (
                  <View key={player.id} style={styles.playerContainer}>
                    <Text>
                      <Text style={styles.playerNumber}>{player.number}</Text> - {player.firstname} {player.lastname},{" "}
                      <Text style={styles.playerPosition}>{position(player.position)}</Text>
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
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
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 20,
  },
  teamContainer: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  teamName: {
    backgroundColor: "#3498db",
    color: "white",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 5,
  },
  playersList: {
    marginTop: 10,
  },
  playerContainer: {
    padding: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    marginVertical: 5,
  },
  playerNumber: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  playerPosition: {
    textDecorationLine: "underline",
    fontStyle: "italic",
    color: "blue",
  },
});
