import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

export default function ChangeDisplayNameForm(props) {
  const { displayName, setIsVisibleModal, setReloadData, toastRef } = props;
  console.log(props);

  const updateDisplayName = () => {
    console.log("Nombre de usuario actualizado");
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre"
        containerStyle={styles.input}
        defaultValue={displayName && displayName}
        //onChange={..}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2"
        }}
        //errorMessage={}
      />
      <Button
        title="Cambiar nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={updateDisplayName}
        /* loading={} */
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    marginBottom: 10
  },
  btnContainer: {
    marginTop: 20
  },
  btn: {
    backgroundColor: "#00a680"
  }
});
