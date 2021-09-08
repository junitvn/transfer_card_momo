import React, { useMemo } from "react";
import { View, Image, StyleSheet } from "react-native";
import { icon } from "../helper/iconParser";
import SectionText from "./SectionText";

export interface ISectionIcon {
  type: "ICON";
  size?: number;
  name?: string;
  iconColor?: string;
  textBottom?: string;
  textLeft?: string;
  textRight?: string;
  textVariant?: "h1" | "h2" | "h3" | "h4" | "title" | "subTitle" | "caption";
  textWeight?: "bold" | "medium" | "regular" | "normal";
  textColor?: string;
  style?: any;
}

interface ISectionIconProps {
  data: ISectionIcon;
}

const styles = StyleSheet.create({
  containerTextBottom: {
    alignItems: "center"
  },
  containerTextLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  containerTextRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  textIconRight: {
    marginLeft: 5
  },
  textIconLeft: {
    marginRight: 5
  }
});

const SectionIcon = (props: ISectionIconProps) => {
  const {
    size,
    textBottom,
    textLeft,
    textRight,
    name = "",
    textVariant = "title",
    textColor = "black",
    textWeight = "regular",
    style = {}
  } = props.data;

  const memorizeIcon = useMemo(() => {
    const iconSrc = ["http", "https"].includes(name)
      ? { uri: name }
      : icon[name];
    return (
      <Image
        source={iconSrc || icon.ic_Opps}
        style={[{ width: size, height: size }, style]}
      />
    );
  }, [name, size, style]);

  if (textBottom) {
    return (
      <View style={styles.containerTextBottom}>
        {memorizeIcon}
        <SectionText
          data={{
            type: "TEXT",
            value: textBottom,
            variant: textVariant,
            color: textColor,
            weight: textWeight
          }}
        />
      </View>
    );
  }

  if (textLeft) {
    return (
      <View style={styles.containerTextLeft}>
        <SectionText
          data={{
            type: "TEXT",
            value: textLeft,
            variant: textVariant,
            color: textColor,
            weight: textWeight
          }}
          style={styles.textIconLeft}
        />
        {memorizeIcon}
      </View>
    );
  }

  if (textRight) {
    return (
      <View style={styles.containerTextRight}>
        {memorizeIcon}
        <SectionText
          data={{
            type: "TEXT",
            value: textRight,
            variant: textVariant,
            color: textColor,
            weight: textWeight
          }}
          style={styles.textIconRight}
        />
      </View>
    );
  }

  return memorizeIcon;
};

export default SectionIcon;
