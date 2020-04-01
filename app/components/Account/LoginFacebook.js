import React, { useState, Component } from "react";
import { View, Alert } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";

//TODO fix credential error
export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);

  async function logIn() {
    try {
      await Facebook.initializeAsync(FacebookApi.application_id);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        setIsLoading(true);
        console.log(token);
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );

        await firebase
          .auth()
          .signInWithCredential(response)
          .then(() => {
            navigation.navigate("Account");
          })
          .catch(() => {
            toastRef.current.show(
              "Error accediendo a facebook, Error desconocido, intentelo más tarde"
            );
          });
      } else if (type === "cancel") {
        toastRef.current.show(
          "Inicio de sesión cancelada, Error desconocido, intentelo más tarde"
        );
      } else {
        toastRef.current.show("Error desconocido, intentelo más tarde");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
    setIsLoading(false);
  }

  return (
    <>
      <SocialIcon
        title="Iniciar Sesión con Facebook"
        button
        type="facebook"
        onPress={logIn}
      />
      <Loading isVisible={isLoading} text="Iniciando sesión" />
    </>
  );
}
