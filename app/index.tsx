import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  }
});
