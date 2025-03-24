import Navbar from "@/components/Navbar";
import { FlatList, ScrollView, Text, View } from "react-native";
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
    if (pos === "GK") {
      return "Gardien";
    }

    if (pos === "DEF") {
      return "Défenseur";
    }

    if (pos === "MF") {
      return "Milieu";
    }

    if (pos === "FW") {
      return "Attaquant";
    }

    return "erreur";
  }

  useEffect(() => {
    async function get() {
      setTeams(teamJson);
    }

    get();
  }, []);

  return (
    <>
      <ScrollView style={{ padding: 16 }}>
        <SafeAreaProvider>
          <SafeAreaView>
            <Navbar />
            <Separator />
            <FlatList
              data={teams}
              renderItem={(team) => (
                <View key={team.index} style={styles.container}>
                  <Text style={styles.teamName}>{team.item.name}</Text>
                  <View>
                    {team.item.players.map((player) => (
                      <View key={player.id} style={styles.playerContainer}>
                        <Text>
                          <Text style={{ fontWeight: "900" }}>
                            {player.number}
                          </Text>{" "}
                          - {player.firstname} {player.lastname},{" "}
                          <Text style={{ textDecorationLine: "underline" }}>
                            {position(player.position)}
                          </Text>
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
              nestedScrollEnabled={true}
            />
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
    width: 240,
    margin: "auto",
    display: "flex",
    marginBottom: 24,
  },
  teamName: {
    backgroundColor: "lightblue",
    padding: 4,
    fontWeight: "900",
    fontSize: 18,
  },
  playerContainer: {
    padding: 4,
    backgroundColor: "#f7f7f7",
  },
});
