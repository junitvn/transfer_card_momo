import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_tem_collection: ICards = {
  cards: [
    {
      items: [
        {
          type: "COLUMN",
          styleClasses: ["default-sender-container"],
          fields: [
            {
              styleClasses: ["recommend-padding", "justify-content"],
              type: "ROW",
              fields: [
                {
                  type: "ROW",
                  styleClasses: [
                    "justify-content-space-between",
                    "align-items-center"
                  ],
                  image: require("../assets/ic_tem_collection.png"),
                  style: { width: 72, height: 72, marginTop: 8 },
                  imageStyle: { resizeMode: "stretch", borderRadius: 10 },
                  fields: []
                },
                {
                  type: "COLUMN",
                  style: {
                    alignItems: "flex-start",
                    marginLeft: 8,
                    marginTop: 8
                  },
                  fields: [
                    {
                      type: "TEXT",
                      value: "Mời bạn tham gia",
                      variant: "title",
                      weight: "bold",
                      color: "#303233"
                    },
                    {
                      type: "TEXT",
                      value:
                        "Tích luỹ 1 tem cho mỗi hoá \nđơn siêu thị 40k, đủ 5 tem \nhốt ngay quà khủng",
                      variant: "subTitle",
                      color: "#b9b9b9"
                    }
                  ]
                }
              ]
            },
            {
              type: "ROW",
              fields: [
                {
                  type: "BUTTON",
                  title: "Xem thể lệ",
                  styleClasses: ["button-confirm"],
                  style: { width: "92%", marginLeft: 12, marginBottom: 12 }
                }
              ]
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
          styleClasses: ["default-receiver-container"],
          fields: [
            {
              styleClasses: ["recommend-padding", "justify-content"],
              type: "ROW",
              fields: [
                {
                  type: "ROW",
                  styleClasses: [
                    "justify-content-space-between",
                    "align-items-center"
                  ],
                  image: require("../assets/ic_tem_collection.png"),
                  style: { width: 72, height: 72, marginTop: 8 },
                  imageStyle: { resizeMode: "stretch", borderRadius: 10 },
                  fields: []
                },
                {
                  type: "COLUMN",
                  style: {
                    alignItems: "flex-start",
                    marginLeft: 8,
                    marginTop: 8
                  },
                  fields: [
                    {
                      type: "TEXT",
                      value: "Mời bạn tham gia",
                      variant: "title",
                      weight: "bold",
                      color: "#303233"
                    },
                    {
                      type: "TEXT",
                      value:
                        "Tích luỹ 1 tem cho mỗi hoá \nđơn siêu thị 40k, đủ 5 tem \nhốt ngay quà khủng",
                      variant: "subTitle",
                      color: "#b9b9b9"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      styleClasses: ["transfer-receiver-container"],
      displayForUsers: ["receiver-id"]
    }
  ]
};
