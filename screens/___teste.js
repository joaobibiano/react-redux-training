import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Table extends Component {
  render() {
    const source = [1, 2, 3, 4, 5];
    return (
      <View>
        {source.map((number) => (
          <TableItem title={"Row " + number} />
        ))}
      </View>
    );
  }
}

export default class TableItem extends Component {
  render() {
    return (
      <View>
        <Text>I'm the {this.props.title} </Text>
      </View>
    );
  }
}
export default class TableItem2 extends Component {
  render() {
    return (
      <View>
        <Text>I'm the {this.props.title} </Text>
      </View>
    );
  }
}
