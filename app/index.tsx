import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ThemedText from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColors";
import Card from "@/components/Card";
import PokemonCard from "@/components/pokemon/PokemonCard";

export default function Index() {
  const colors = useThemeColor();
  const pokemons = Array.from({ length: 99 }, (_, k) => ({
    name: `Pokémon ${k + 1}`,
    id: k + 1,
  }));
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/Pokeball.png")}
          style={styles.pokemonImage}
        />
        <ThemedText variant="headline" color="grayLight">
          Pokedex
        </ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          renderItem={({ item }) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              style={{ flex: 1 / 3 }}
            /> 
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  pokemonImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
});
