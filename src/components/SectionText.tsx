import React from "react";
import { Text } from "react-native";
import { Colors } from "../helper/styleParser";

export interface ISectionText {
  type: "TEXT";
  value: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "title" | "subTitle" | "caption";
  weight?: "bold" | "medium" | "regular" | "normal";
  color?: string;
  textAlign?: "left" | "right" | "center"; // default is left
  style?: any;
  spans?: ISectionText[];
}

interface ISectionTextProps {
  data: ISectionText;
  style?: any;
}

const variantParser = (
  value: "h1" | "h2" | "h3" | "h4" | "title" | "subTitle" | "caption"
) => {
  switch (value) {
    case "h1":
      return 32;
    case "h2":
      return 24;
    case "h3":
      return 20;
    case "h4":
      return 16;
    case "title":
      return 14;
    case "subTitle":
      return 12;
    case "caption":
      return 10;
    default:
      return 14;
  }
};

const SectionText = (props: ISectionTextProps) => {
  const { data, style } = props;
  const {
    value,
    weight = "normal",
    textAlign = "left",
    variant = "title",
    color = Colors.black,
    style: textStyle,
    spans = []
  } = data;
  let parseStyle =
    typeof textStyle === "string" && textStyle.length > 0
      ? JSON.parse(textStyle)
      : {};
  if (typeof textStyle === "object") parseStyle = textStyle;
  const parseTextAlign = !textAlign ? "left" : textAlign;
  return (
    <Text
      style={[
        style,
        parseStyle,
        {
          textAlign: parseTextAlign,
          fontWeight: weight,
          color: color,
          fontSize: variantParser(variant)
        }
      ]}
    >
      {value}
      {spans?.map((item, index) => {
        return <SectionText data={item} key={item.value + index} />;
      })}
    </Text>
  );
};

export default SectionText;
