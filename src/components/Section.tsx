import React, { useCallback } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { fromStringToStyle } from "../helper/styleParser";
import SectionButton, { ISectionButton } from "./SectionButton";
import SectionIcon, { ISectionIcon } from "./SectionIcon";
import SectionProgressBar, { ISectionProgressBar } from "./SectionProgressBar";
import SectionAvatarList, { ISectionAvatarList } from "./SectionAvatarList";
import SectionText, { ISectionText } from "./SectionText";

export interface ISection {
  style?: any;
  imageStyle?: any;
  styleClasses?: Array<string>;
  type: "ROW" | "COLUMN";
  image?: string;
  refType?: "redirect-url" | "to-mini-app" | "scroll-to-message";
  ref?: string;
  refParams?: any;
  fields: Array<
    | ISectionButton
    | ISectionIcon
    | ISectionText
    | ISection
    | ISectionProgressBar
    | ISectionAvatarList
  >;
}

interface ISectionProps {
  data: ISection;
  onScrollToMessage: (ref?: string) => void;
}

export const Section = (props: ISectionProps) => {
  const { data } = props;
  const {
    styleClasses = [],
    refType = "",
    ref = "",
    refParams = {},
    style = "",
    imageStyle = "",
    image = undefined
  } = data;
  let parseStyle =
    typeof style === "string" && style.length > 0 ? JSON.parse(style) : {};
  if (typeof style === "object") parseStyle = style;

  let imageParseStyle =
    typeof imageStyle === "string" && style.length > 0
      ? JSON.parse(imageStyle)
      : {};
  if (typeof imageStyle === "object") imageParseStyle = imageStyle;

  const additionalStyle = {
    flexDirection: data.type === "ROW" ? "row" : "column"
  };
  const classesStyle = fromStringToStyle(styleClasses);
  let ParentView = View;
  if (image) {
    ParentView = ImageBackground;
  }
  if (refType) {
    ParentView = TouchableOpacity;
  }

  const onPressSection = useCallback(() => {
    if (refType === "scroll-to-message") {
      props?.onScrollToMessage(ref);
    }
    return undefined;
  }, [refType, ref, refParams]);

  return (
    <ParentView
      source={image ? { uri: image } : undefined}
      style={[...classesStyle, parseStyle, additionalStyle]}
      imageStyle={imageParseStyle}
      onPress={onPressSection}
    >
      {data?.fields?.map((item, index) => {
        switch (item.type) {
          case "ROW":
            return (
              <Section
                data={item}
                key={index}
                onScrollToMessage={props?.onScrollToMessage}
              />
            );
          case "COLUMN":
            return (
              <Section
                data={item}
                key={index}
                onScrollToMessage={props?.onScrollToMessage}
              />
            );
          case "ICON":
            return <SectionIcon data={item} key={index} />;
          case "TEXT":
            return <SectionText data={item} key={index} />;
          case "BUTTON":
            return <SectionButton data={item} key={index} />;
          case "PROGRESS_BAR":
            return <SectionProgressBar data={item} key={index} />;
          case "AVATAR_LIST":
            return <SectionAvatarList data={item} key={index} />;
          default:
            return null;
        }
      })}
    </ParentView>
  );
};
