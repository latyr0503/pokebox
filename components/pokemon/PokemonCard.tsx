import React from "react";
import { Image, StyleSheet, View, ViewStyle } from "react-native";
import Card from "../Card";
import ThemedText from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColors";

interface Props {
  style?: ViewStyle;
  id: number;
  name: string;
}
export default function PokemonCard({ style, id, name }: Props) {
  const colors = useThemeColor();
  return (
    <Card style={[style, styles.card]}>
      <View style={[styles.shadow, { backgroundColor: colors.grayBackground }]} />

      <ThemedText style={styles.id} variant="caption" color="grayDark">
        #{id.toString().padStart(3, "0")}
      </ThemedText>
      <Image
        style={{ width: 75, height: 75, resizeMode: "contain" }}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
      />
      <ThemedText>{name}</ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    alignItems: "center",
    padding: 4,
  },
  id: {
    // textAlign: "right"
  },
  shadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    borderRadius: 7,
  },
});
