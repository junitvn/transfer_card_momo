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
                  image:
                    "https://cdn.mservice.com.vn/app/img/social/120-03-service-03-08-entertaiment-combo@3x.png",
                  style: { width: 72, height: 72, marginTop: 8 },
                  imageStyle: { resizeMode: "stretch", borderRadius: 10 },
                  fields: []
                },
                {
                  type: "COLUMN",
                  style: {
                    flex: 1,
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
                        "Tích luỹ 1 tem cho mỗi hoá đơn siêu thị 40k, đủ 5 tem hốt ngay quà khủng",
                      variant: "subTitle",
                      color: "#b9b9b9",
                      style: { marginTop: 4 }
                    }
                  ]
                }
              ]
            },
            {
              type: "ROW",
              style: { flex: 1, paddingHorizontal: 12, paddingBottom: 12 },
              fields: [
                {
                  type: "BUTTON",
                  title: "Xem thể lệ",
                  styleClasses: ["button-confirm"],
                  style: { width: "100%" }
                }
              ]
            }
          ]
        }
      ],
      styleClasses: ["default-sender-container"],
      displayForUsers: ["sender-id"]
    },
    {
      items: [
        {
          type: "COLUMN",
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
                  image:
                    "https://cdn.mservice.com.vn/app/img/social/120-03-service-03-08-entertaiment-combo@3x.png",
                  style: { width: 72, height: 72, marginTop: 8 },
                  imageStyle: { resizeMode: "stretch", borderRadius: 10 },
                  fields: []
                },
                {
                  type: "COLUMN",
                  style: {
                    flex: 1,
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
                        "Tích luỹ 1 tem cho mỗi hoá đơn siêu thị 40k, đủ 5 tem hốt ngay quà khủng",
                      variant: "subTitle",
                      color: "#b9b9b9",
                      style: { marginTop: 4 }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      styleClasses: ["default-receiver-container"],
      displayForUsers: ["receiver-id"]
    }
  ]
};
