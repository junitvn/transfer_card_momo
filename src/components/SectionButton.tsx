import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { fromStringToStyle, Colors } from "../helper/styleParser";

export interface ISectionButton {
  title: string;
  style?: any;
  styleClasses?: Array<string>;
  styleText?: any;
  type: "BUTTON";
  action?: IActionButton;
}

interface IActionButton {
  type:
    | "redirect-url"
    | "to-mini-app"
    | "api-call"
    | "scroll-to-message"
    | "sub-domain-api-call"
    | "make-a-call";
  ref?: string;
  refParams?: any;
  api?: string;
}

export interface ISectionButtonProps {
  data: ISectionButton;
  onPress?: () => void;
}

const doAPI = (apiRef, params) => {
  return new Promise((resolve) => {
    const msgRequest = {
      msgType: apiRef,
      momoMsg: params
    };
    setTimeout(() => {
      resolve(msgRequest);
    }, 1000);
  });
};

const SectionButton = (props: ISectionButtonProps) => {
  const { title = "", action, styleClasses, style, styleText } =
    props?.data || {};
  const classesStyle = fromStringToStyle(styleClasses);

  let styleTextByClass = {};
  if (Array.isArray(styleClasses)) {
    if (styleClasses.includes("button-confirm")) {
      styleTextByClass = {
        fontWeight: "bold",
        color: "white"
      };
    }
    if (styleClasses.includes("button-cancel")) {
      styleTextByClass = {
        fontWeight: "bold",
        color: Colors.black_17
      };
    }
  }

  const buttonAction = useCallback(async () => {
    const { type, api, refParams, ref } = action;
    const parseRefParams =
      typeof refParams === "string" && refParams.length > 0
        ? JSON.parse(refParams)
        : {};
    if (type === "api-call") {
      const response = await doAPI(api, parseRefParams);
      console.log("response: ", response);
      props?.onPress();
    }
    if (action.type === "to-mini-app") {
      console.log("MaxApi.startFeatureCode: ", { ref, parseRefParams });
    }
  }, [action]);

  let parseStyle =
    typeof style === "string" && style.length > 0 ? JSON.parse(style) : {};
  if (typeof style === "object") parseStyle = style;

  return (
    <TouchableOpacity
      style={[...classesStyle, parseStyle]}
      onPress={buttonAction}
    >
      <Text style={[{ color: Colors.white }, styleTextByClass, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SectionButton;
