import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Meus referidos Proffys"} />
    </View>
  );
}