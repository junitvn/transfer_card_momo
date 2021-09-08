import React from "react";
import { ScrollView } from "react-native";
import SectionContainer from "./components/SectionContainer";
import { block_transfer } from "./demo/card";
import { block_transfer_request } from "./demo/card_2";
import { block_group_transfer_request } from "./demo/card_3";
import { block_tem_collection } from "./demo/card_tem_collection";

const DATA = block_tem_collection;

function App() {
  return (
    <ScrollView
      style={{
        paddingTop: 30,
        marginLeft: 50,
        paddingLeft: 20,
        width: 700,
        height: 1500,
        borderLeftWidth: 1,
        borderRightWidth: 1
      }}
    >
      {DATA.cards.map((item) => {
        if (!item.displayForUsers.includes("receiver-id")) {
          return (
            <SectionContainer data={item} style={{ alignSelf: "flex-start" }} />
          );
        } else {
          return (
            <SectionContainer data={item} style={{ alignSelf: "flex-end" }} />
          );
        }
      })}
    </ScrollView>
  );
}

export default App;
