import React from "react";
import { fromStringToStyle } from "../helper/styleParser";
import { ISection, Section } from "./Section";
import { View, TouchableOpacity } from "react-native";

export interface IData {
  items: Array<ISection>;
  style?: any;
  styleClasses?: Array<string>;
  refType?: "redirect-url" | "to-mini-app";
  ref?: string;
  refParams?: any;
  isSender?: boolean;
  displayForUsers: Array<string>;
}

interface ISectionContainerProps {
  data: IData;
  onPress?: () => void;
  onLongPress?: () => void;
  onScrollToMessage?: () => void;
  style?: any;
}

const SectionContainer = (props: ISectionContainerProps) => {
  const { data } = props;
  const { items, styleClasses } = data;
  const classesStyle = fromStringToStyle(styleClasses);
  const customStyle = [...classesStyle, props?.style || {}];
  return (
    <View style={customStyle}>
      <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}>
        {items?.map((k, index) => {
          if (k.type === "ROW" || k.type === "COLUMN") {
            return (
              <Section
                data={k}
                key={index}
                onScrollToMessage={props?.onScrollToMessage}
              />
            );
          }
          return null;
        })}
      </TouchableOpacity>
    </View>
  );
};

export default SectionContainer;
