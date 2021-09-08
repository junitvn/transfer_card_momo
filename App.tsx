import React from "react";
import { View } from "react-native";
import SectionContainer from "./src/components/SectionContainer";
import { block_total_transfer_message } from "./demo/YCCT_success";
import { block_reply } from "./demo/reply";
import { block_text } from "./src/demo/text";

const DATA = block_total_transfer_message;

function App() {
  return (
    <View
      style={{
        paddingTop: 30,
        marginLeft: 50,
        paddingLeft: 20,
        width: 700,
        height: 1000,
        borderLeftWidth: 1,
        borderRightWidth: 1
      }}
    >
      {DATA.cards.map((item) => {
        if (!item.isSender) {
          return (
            <SectionContainer
              key={item.isSender.toString()}
              data={item}
              style={{ alignSelf: "flex-start" }}
            />
          );
        } else {
          return (
            <SectionContainer
              key={item.isSender.toString()}
              data={item}
              style={{ alignSelf: "flex-end" }}
            />
          );
        }
      })}
    </View>
  );
}

export default App;
