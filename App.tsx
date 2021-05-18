import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as S from "./Wrapper.styles";

export default function App() {
  return (
    <S.WrapperSafeAreaView>
      <S.WrapperNav>
        <S.TextNav>Stan konta</S.TextNav>
      </S.WrapperNav>
      <S.WrapperView>
        <Text>dasdsadad</Text>
      </S.WrapperView>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </S.WrapperSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
