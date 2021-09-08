import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_transfer: ICards = {
  cards: [
    {
      items: [
        {
          type: "COLUMN",
          styleClasses: ["default-sender-container"],
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
                      value: "CHUYỂN TIỀN",
                      variant: "subTitle",
                      weight: "bold",
                      textAlign: "left"
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
            // {
            //   type: "COLUMN",
            //   styleClasses: [
            //     "recommend-padding-left",
            //     "recommend-padding-right"
            //   ],
            //   fields: [
            //     {
            //       type: "TEXT",
            //       value: "Đây là lời nhắn",
            //       variant: "subTitle"
            //     },
            //     {
            //       type: "COLUMN",
            //       image: "#{sticker}",
            //       style: {
            //         resizeMode: "contain",
            //         width: 64,
            //         height: 64
            //       },
            //       fields: []
            //     }
            //   ]
            // },
            {
              type: "ROW",
              styleClasses: [
                "justify-content-space-between",
                "align-items-center"
              ],
              image:
                "https://cdn.mservice.com.vn/app/img/social/transfer-theme-card-270.jpg",
              style: { width: "100%", height: 72, marginTop: 8 },
              imageStyle: { resizeMode: "stretch", borderRadius: 10 },
              fields: []
            }
          ]
        }
        // {
        //   type: "ROW",
        //   fields: [
        //     {
        //       type: "BUTTON",
        //       title: "Chuyển lại",
        //       styleClasses: ["button-confirm"],
        //       style: { width: "100%", marginTop: 12 }
        //     }
        //   ]
        // }
      ],
      styleClasses: ["transfer-sender-container"],
      displayForUsers: ["sender-id"]
    },
    {
      items: [
        {
          type: "COLUMN",
          styleClasses: ["default-receiver-container"],
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
                      value: "CHUYỂN TIỀN",
                      variant: "subTitle",
                      weight: "bold",
                      textAlign: "left"
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
                  value: "Đây là lời nhắn",
                  variant: "subTitle"
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
                "https://cdn.mservice.com.vn/app/img/social/transfer-theme-card-270.jpg",
              style: {
                width: "100%",
                height: 72,
                marginTop: 8
              },
              imageStyle: { resizeMode: "stretch", borderRadius: 10 },
              fields: []
            }
          ]
        },
        {
          type: "ROW",
          fields: [
            {
              type: "BUTTON",
              title: "Chuyển lại",
              styleClasses: ["button-confirm"],
              style: { width: "100%", marginTop: 12 }
            }
          ]
        }
      ],
      styleClasses: ["transfer-receiver-container"],
      displayForUsers: ["receiver-id"]
    }
  ]
};
