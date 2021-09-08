import { element } from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { fromStringToStyle } from "../helper/styleParser";

export interface ISectionAvatarList {
  type: "AVATAR_LIST";
  users: string[];
  style?: any;
  styleClasses?: string[];
}

interface ISectionAvatarListProps {
  data: ISectionAvatarList;
}

const styles = StyleSheet.create({
  container: { width: "100%", height: 2, flexDirection: "row" }
});

const SectionAvatarList = (props: ISectionAvatarListProps) => {
  const { style = {}, users = [], styleClasses } = props.data;
  let parseStyle =
    typeof style === "string" && style.length > 0 ? JSON.parse(style) : {};
  if (typeof style === "object") parseStyle = style;
  const classesStyle = fromStringToStyle(styleClasses);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center"
        },
        ...classesStyle,
        parseStyle
      ]}
    >
      {users.map((element, index) => {
        return (
          <View
            style={{
              width: 22,
              height: 22,
              backgroundColor: "red",
              borderRadius: 12,
              borderColor: "red",
              borderWidth: 2,
              right: index * 10,
              zIndex: 10 - index
            }}
          >
            <View
              style={{ flex: 1, backgroundColor: "white", borderRadius: 12 }}
            />
          </View>
        );
      })}
      <View
        style={{
          width: 22,
          height: 22,
          backgroundColor: "red",
          borderRadius: 12,
          borderColor: "red",
          borderWidth: 2,
          marginLeft: -20
        }}
      >
        <View style={{ flex: 1, backgroundColor: "white", borderRadius: 12 }} />
      </View>
    </View>
  );
};

export default SectionAvatarList;
