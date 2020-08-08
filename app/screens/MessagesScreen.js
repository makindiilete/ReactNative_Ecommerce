import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/michaelz.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/michaelz.jpeg"),
  },
];

function MessagesScreen(props) {
  const [msg, setMsg] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setMsg(messages);
  }, []);

  const handleDelete = (item) => {
    setMsg(msg.filter((i) => i !== item));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={msg}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected : ", item)}
            swipeAble={true}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(messages) => messages.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMsg([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/michaelz.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
