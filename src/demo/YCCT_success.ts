import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_total_transfer_message: ICards = {
  cards: [
    {
      items: [
        {
          type: "ROW",
          styleClasses: ["recommend-padding", "justify-content-space-between"],
          fields: [
            {
              type: "ICON",
              size: 38,
              name: "ic-reply-send-trans",
              textBottom: "11:26",
              textVariant: "subTitle",
              textColor: "#b9b9b9"
            },
            {
              type: "COLUMN",
              fields: [
                {
                  type: "TEXT",
                  value: "ĐÃ CHUYỂN",
                  weight: "bold",
                  variant: "subTitle",
                  textAlign: "right"
                },
                {
                  type: "ICON",
                  size: 16,
                  name: "ic_status_success",
                  textRight: "Thành công",
                  textVariant: "subTitle",
                  textColor: "#727272"
                },
                {
                  type: "TEXT",
                  value: "1.800đ",
                  textAlign: "right",
                  color: "#727272"
                }
              ]
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: ["recommend-padding-left", "recommend-padding-right"],
          fields: [
            {
              type: "COLUMN",
              style: {
                backgroundColor: "#f9f9f9",
                width: "100%",
                borderRadius: 5,
                paddingLeft: 15,
                paddingTop: 5,
                paddingBottom: 5,
                marginBottom: 10
              },
              fields: [
                {
                  type: "TEXT",
                  value: "Đây là lời nhắn",
                  color: "#303233"
                }
              ]
            }
          ]
        }
      ],
      styleClasses: ["transfer-container"],
      isSender: true
    },
    {
      items: [
        {
          type: "ROW",
          styleClasses: ["recommend-padding", "justify-content-space-between"],
          fields: [
            {
              type: "COLUMN",
              fields: [
                {
                  type: "TEXT",
                  value: "ĐÃ CHUYỂN",
                  weight: "bold",
                  variant: "subTitle",
                  textAlign: "left"
                },
                {
                  type: "ICON",
                  size: 16,
                  name: "ic_status_success",
                  textLeft: "Thành công",
                  textVariant: "subTitle",
                  textColor: "#727272"
                },
                {
                  type: "TEXT",
                  value: "1.800đ",
                  textAlign: "left",
                  color: "#727272"
                }
              ]
            },
            {
              type: "ICON",
              size: 38,
              name: "ic-reply-receive-trans",
              textBottom: "11:26",
              textVariant: "subTitle",
              textColor: "#b9b9b9"
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: ["recommend-padding-left", "recommend-padding-right"],
          fields: [
            {
              type: "COLUMN",
              style: {
                backgroundColor: "#f9f9f9",
                width: "100%",
                borderRadius: 5,
                paddingLeft: 15,
                paddingTop: 5,
                paddingBottom: 5,
                marginBottom: 10
              },
              fields: [
                {
                  type: "TEXT",
                  value: "Đây là lời nhắn",
                  color: "#303233"
                }
              ]
            }
          ]
        }
      ],
      styleClasses: ["transfer-container"],
      isSender: false
    }
  ]
};
