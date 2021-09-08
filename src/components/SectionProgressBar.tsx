import React from "react";
import { StyleSheet, View } from "react-native";
import { fromStringToStyle } from "../helper/styleParser";

export interface ISectionProgressBar {
  type: "PROGRESS_BAR";
  max: number;
  current: number;
  style?: any;
  styleClasses?: string[];
}

interface ISectionProgressBarProps {
  data: ISectionProgressBar;
}

const styles = StyleSheet.create({
  container: { width: "100%", height: 2, flexDirection: "row" }
});

const SectionProgressBar = (props: ISectionProgressBarProps) => {
  const { style = {}, max = 0, current = 0, styleClasses } = props.data;
  let parseStyle =
    typeof style === "string" && style.length > 0 ? JSON.parse(style) : {};
  if (typeof style === "object") parseStyle = style;
  const classesStyle = fromStringToStyle(styleClasses);
  return (
    <View style={[styles.container, ...classesStyle, parseStyle]}>
      <View
        style={{
          backgroundColor: "#d82d8b",
          flex: current,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        }}
      />
      <View
        style={{
          backgroundColor: "#f0f0f0",
          flex: max - current,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8
        }}
      />
    </View>
  );
};

export default SectionProgressBar;
