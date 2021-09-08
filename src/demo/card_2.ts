import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_transfer_request: ICards = {
  cards: [
    {
      items: [
        {
          type: "COLUMN",
          styleClasses: ["shadow-container"],
          fields: [
            {
              styleClasses: [
                "recommend-padding",
                "justify-content-space-between"
              ],
              type: "ROW",
              fields: [
                {
                  type: "COLUMN",
                  fields: [
                    {
                      type: "TEXT",
                      value: "Yêu cầu chuyển tiền",
                      variant: "title",
                      weight: "bold"
                    },
                    {
                      type: "TEXT",
                      value: "20.000 đ",
                      style: { marginTop: 4 },
                      variant: "h3",
                      weight: "bold",
                      textAlign: "left"
                    }
                  ]
                },
                {
                  type: "COLUMN",
                  style: { alignItems: "flex-end" },
                  fields: [
                    {
                      type: "ICON",
                      size: 24,
                      name: "#{iconStatus}"
                    },
                    {
                      type: "TEXT",
                      value: "#{contentStatus}",
                      variant: "subTitle",
                      color: "#b9b9b9"
                    }
                  ]
                }
              ]
            },
            {
              type: "COLUMN",
              styleClasses: [
                "recommend-padding-left",
                "recommend-padding-right"
              ],
              fields: [
                {
                  type: "TEXT",
                  value: "[0982xxxxxx]",
                  variant: "subTitle",
                  weight: "bold",
                  spans: [
                    {
                      type: "TEXT",
                      value: "chưa chuyển cho bạn"
                    }
                  ]
                },
                {
                  type: "COLUMN",
                  image: "#{sticker}",
                  style: {
                    resizeMode: "contain",
                    width: 64,
                    height: 64
                  },
                  fields: []
                }
              ]
            },
            {
              type: "ROW",
              styleClasses: [
                "justify-content-space-between",
                "align-items-center"
              ],
              image:
                "https://cdn.mservice.com.vn/app/img/social/transfer-theme-card-default.png",
              style: { width: "100%", height: 36 },
              fields: []
            }
          ]
        }
      ],
      styleClasses: ["transfer-sender-container"],
      displayForUsers: ["sender-id"]
    },
    {
      items: [
        {
          type: "COLUMN",
          styleClasses: ["shadow-container"],
          fields: [
            {
              styleClasses: [
                "recommend-padding",
                "justify-content-space-between"
              ],
              type: "ROW",
              fields: [
                {
                  type: "COLUMN",
                  fields: [
                    {
                      type: "TEXT",
                      value: "Yêu cầu chuyển tiền",
                      variant: "title",
                      weight: "bold"
                    },
                    {
                      type: "TEXT",
                      value: "20.000 đ",
                      style: { marginTop: 4 },
                      variant: "h3",
                      weight: "bold",
                      textAlign: "left"
                    }
                  ]
                },
                {
                  type: "COLUMN",
                  style: { alignItems: "flex-end" },
                  fields: [
                    {
                      type: "ICON",
                      size: 24,
                      name: "#{iconStatus}"
                    },
                    {
                      type: "TEXT",
                      value: "#{contentStatus}",
                      variant: "subTitle",
                      color: "#b9b9b9"
                    }
                  ]
                }
              ]
            },
            {
              type: "COLUMN",
              styleClasses: [
                "recommend-padding-left",
                "recommend-padding-right"
              ],
              fields: [
                {
                  type: "TEXT",
                  value: "[0982xxxxxx]",
                  variant: "subTitle",
                  weight: "bold",
                  spans: [
                    {
                      type: "TEXT",
                      value: "chưa chuyển cho bạn"
                    }
                  ]
                },
                {
                  type: "COLUMN",
                  image: "#{sticker}",
                  style: {
                    resizeMode: "contain",
                    width: 64,
                    height: 64
                  },
                  fields: []
                }
              ]
            },
            {
              type: "ROW",
              styleClasses: [
                "justify-content-space-between",
                "align-items-center"
              ],
              image:
                "https://cdn.mservice.com.vn/app/img/social/transfer-theme-card-default.png",
              style: { width: "100%", height: 36 },
              fields: []
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: ["justify-content-space-between"],
          style: { marginTop: 12 },
          fields: [
            {
              type: "BUTTON",
              title: "Trả rồi",
              styleClasses: ["button-cancel"],
              style: { width: "48%" }
            },
            {
              type: "BUTTON",
              title: "Chuyển lại",
              styleClasses: ["button-confirm"],
              style: { width: "48%" }
            }
          ]
        }
      ],
      styleClasses: ["transfer-receiver-container"],
      displayForUsers: ["receiver-id"]
    }
  ]
};
