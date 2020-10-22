import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

function TabOneScreen() {
  const dispatch = useDispatch();

  const userLogged = useSelector((state) => state.user);
  const checkout = useSelector((state) => state.checkout);

  console.log(userLogged);

  const loginHandler = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        user: { name: "João", id: 10 },
        token: "4ec328fb-854d-4a03-a32c-cc0295ee7a2b",
      },
    });
  };

  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeira Tab</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button onPress={loginHandler} title="LOGIN"></Button>
      <Button onPress={logoutHandler} title="LOGOUT"></Button>

      <Text>{userLogged.user.id ? "LOGADO" : "FAZER LOGIN"}</Text>

      {checkout.products.map((product, index) => (
        <View key={index}>
          <Text>{product.id}</Text>
          <Text>{product.name}</Text>
          <Text>{product.totalPrice}</Text>
        </View>
      ))}
    </View>
  );
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
