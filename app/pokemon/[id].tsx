import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokemon() {
  const params = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>Affiche les informations sur un Pokémon : {params.id}</Text>
    </SafeAreaView>
  );
}
