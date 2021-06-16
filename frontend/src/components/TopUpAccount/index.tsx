import React, { useState } from "react";
import * as SH from "~shared";

import styled from "styled-components";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";
import axios from "axios";
import { useUserInfo } from "~hooks";
import Blik from "./blik.png";

export const TopUpAccount = () => {
  const { navigate } = useNavigation();
  const { data, refetch, isLoading } = useUserInfo();
  const [balance, setBalance] = useState("");

  if (isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }

  const currentBalance = data?.balanceAccount + Number(balance);

  const updateBalance = () => {
    axios
      .put("http://localhost:1337/users/1", {
        balanceAccount: currentBalance,
      })
      .then(() => {
        refetch();
        navigate("Wróć");
        alert("Doładowano konto!");
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SH.Container.ContainerWhite>
          <Image source={Blik}></Image>

          <TextInput
            style={styles.input}
            onChangeText={setBalance}
            value={balance}
            placeholder="Wpisz kwotę"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Podaj kod blik"
            keyboardType="numeric"
          />
          <SH.Button.ButtonBlue onPress={updateBalance}>
            <SH.Text.Text18 bold white>
              Dalej
            </SH.Text.Text18>
          </SH.Button.ButtonBlue>
        </SH.Container.ContainerWhite>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

interface IServerResource {
  id: number;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
  },
});
