import { StyleSheet } from "react-native";

export enum Spacing {
  XXS = 2,
  XS = 4,
  S = 8,
  M = 12,
  L = 16,
  XL = 24
}

export enum Colors {
  pink_06 = "#f759ab",
  black_04 = "#e8e8e8",
  black_03 = "#f0f0f0",
  white = "#ffffff",
  black_17 = "#303233",
  black = "#000000"
}

const classes = StyleSheet.create({
  recommendPadding: {
    paddingTop: Spacing.M,
    paddingBottom: Spacing.M,
    paddingLeft: Spacing.M,
    paddingRight: Spacing.M
  },
  recommendPaddingTop: {
    paddingTop: Spacing.M
  },
  smallPaddingBottom: {
    paddingBottom: Spacing.XS
  },
  smallPaddingTop: {
    paddingTop: Spacing.XS
  },
  smallPaddingRight: {
    paddingRight: Spacing.S
  },
  recommendPaddingBottom: {
    paddingBottom: Spacing.M
  },
  recommendPaddingLeft: {
    paddingLeft: Spacing.M
  },
  recommendPaddingRight: {
    paddingRight: Spacing.M
  },
  recommendMarginTop: {
    marginTop: Spacing.M
  },
  recommendMarginBottom: {
    marginBottom: Spacing.M
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentFlexEnd: {
    justifyContent: "flex-end"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end"
  },
  buttonConfirm: {
    paddingVertical: Spacing.S,
    backgroundColor: Colors.pink_06,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  buttonCancel: {
    paddingVertical: Spacing.S,
    backgroundColor: "white",
    borderColor: Colors.black_04,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  replySenderContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.pink_06,
    borderRadius: 10
  },
  replyReceiverContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.black_03,
    borderRadius: 10
  },

  transferContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  recommendSticker: {
    width: 100,
    height: 100
  },
  // new 12-04
  textSenderContainer: {
    maxWidth: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.pink_06,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textReceiverContainer: {
    maxWidth: 300,
    marginBottom: 8,
    backgroundColor: Colors.black_03,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  // end new 12-04
  //new 27-04
  telcoSenderContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  telcoReciverContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  //end new 27-04
  defaultCardSenderContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  defaultCardReciverContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  transferCardReciverContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  transferCardSenderContainer: {
    width: 300,
    marginRight: 32,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  shadowContainer: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export const fromStringToStyle = (styleClass = []) => {
  const convertedStyle = [];
  styleClass.forEach((element) => {
    switch (element) {
      case "recommend-padding":
        convertedStyle.push(classes.recommendPadding);
        break;
      case "recommend-padding-top":
        convertedStyle.push(classes.recommendPaddingTop);
        break;
      case "recommend-padding-bottom":
        convertedStyle.push(classes.recommendPaddingBottom);
        break;
      case "recommend-padding-left":
        convertedStyle.push(classes.recommendPaddingLeft);
        break;
      case "recommend-padding-right":
        convertedStyle.push(classes.recommendPaddingRight);
        break;
      case "recommend-margin-top":
        convertedStyle.push(classes.recommendMarginTop);
        break;
      case "recommend-margin-bottom":
        convertedStyle.push(classes.recommendMarginBottom);
        break;
      case "justify-content-center":
        convertedStyle.push(classes.justifyContentCenter);
        break;
      case "justify-content-space-between":
        convertedStyle.push(classes.justifyContentSpaceBetween);
        break;
      case "align-items-center":
        convertedStyle.push(classes.alignItemsCenter);
        break;
      case "align-items-flex-end":
        convertedStyle.push(classes.alignItemsFlexEnd);
        break;
      case "button-confirm":
        convertedStyle.push(classes.buttonConfirm);
        break;
      case "button-cancel":
        convertedStyle.push(classes.buttonCancel);
        break;
      case "justify-content-flex-end":
        convertedStyle.push(classes.justifyContentFlexEnd);
        break;
      case "small-padding-bottom":
        convertedStyle.push(classes.smallPaddingBottom);
        break;
      case "small-padding-top":
        convertedStyle.push(classes.smallPaddingTop);
        break;
      case "small-padding-right":
        convertedStyle.push(classes.smallPaddingRight);
        break;
      case "reply-sender-container":
        convertedStyle.push(classes.replySenderContainer);
        break;
      case "reply-receiver-container":
        convertedStyle.push(classes.replyReceiverContainer);
        break;
      case "transfer-container":
        convertedStyle.push(classes.transferContainer);
        break;
      case "recommend-sticker":
        convertedStyle.push(classes.recommendSticker);
        break;
      case "text-sender-container":
        convertedStyle.push(classes.textSenderContainer);
        break;
      case "text-receiver-container":
        convertedStyle.push(classes.textReceiverContainer);
        break;
      case "telco-sender-container":
        convertedStyle.push(classes.telcoSenderContainer);
        break;
      case "telco-receiver-container":
        convertedStyle.push(classes.telcoReciverContainer);
        break;
      case "default-sender-container":
        convertedStyle.push(classes.defaultCardSenderContainer);
        break;
      case "default-receiver-container":
        convertedStyle.push(classes.defaultCardReciverContainer);
        break;
      case "transfer-sender-container":
        convertedStyle.push(classes.transferCardSenderContainer);
        break;
      case "transfer-receiver-container":
        convertedStyle.push(classes.transferCardReciverContainer);
        break;
      case "shadow-container":
        convertedStyle.push(classes.shadowContainer);
        break;
      default:
        break;
    }
  });
  return convertedStyle;
};

export default classes;
