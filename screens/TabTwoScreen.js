import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Text, View } from "../components/Themed";

class TabTwoScreen extends Component {
  constructor(props) {
    super(props);
  }

  addProduct = () => {
    this.props.addProduct(10, "MOUSE", 20);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {this.props.checkout.products.map((product, index) => (
          <View key={index}>
            <Text>{product.id}</Text>
            <Text>{product.name}</Text>
            <Text>{product.totalPrice}</Text>
          </View>
        ))}
        <Button onPress={this.addProduct} title="Add Product"></Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // We will find this in our component as this.props.checkout
    checkout: state.checkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // We will find this in our component as this.props.addProducts(id, name, totalPrice)
    addProduct: (id, name, totalPrice) =>
      dispatch({
        type: "ADD_PRODUCT",
        payload: { newProduct: { id, name, totalPrice } },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabTwoScreen);

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
