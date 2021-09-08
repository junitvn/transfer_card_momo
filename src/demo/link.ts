import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_link: ICards = {
  cards: [
    {
      items: [
        {
          type: "ROW",
          styleClasses: ["align-items-center"],
          fields: [
            {
              type: "COLUMN",
              styleClasses: ["recommend-padding"],
              style: {
                backgroundColor: "#f6faff",
                width: "100%",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
              },
              fields: [
                {
                  type: "ROW",
                  styleClasses: ["align-items-center"],
                  fields: [
                    {
                      type: "COLUMN",
                      fields: [
                        {
                          type: "COLUMN",
                          style: {
                            borderColor: "#e8e8e8",
                            borderWidth: 1,
                            backgroundColor: "#ffffff",
                            marginRight: 6
                          },
                          fields: [
                            {
                              type: "ICON",
                              name: "ic_telco_phone",
                              size: 32
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "ROW",
                      style: { flex: 1 },
                      styleClasses: ["justify-content-space-between"],
                      fields: [
                        {
                          type: "TEXT",
                          value: "Nạp tiền điện thoại",
                          variant: "subTitle",
                          weight: "bold"
                        },
                        {
                          type: "TEXT",
                          value: "19:02",
                          variant: "subTitle",
                          color: "#b9b9b9"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: [
            "recommend-padding-left",
            "recommend-padding-right",
            "recommend-padding-top"
          ],
          fields: [
            {
              type: "TEXT",
              value: "PHAN THI HONG HANH",
              variant: "subTitle",
              weight: "bold",
              spans: [
                {
                  type: "TEXT",
                  value: " đã nạp tiền điện thoại cho bạn",
                  variant: "subTitle"
                }
              ]
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: [
            "recommend-padding-left",
            "recommend-padding-right",
            "small-padding-top"
          ],
          fields: [
            {
              type: "TEXT",
              value: "100.000đ",
              variant: "h3",
              weight: "bold"
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: [
            "justify-content-space-between",
            "align-items-center",
            "recommend-padding-right"
          ],
          fields: [
            {
              type: "ICON",
              name: "ic_telco_MobiFone",
              style: { width: 76, height: 41 }
            },
            {
              type: "BUTTON",
              title: "Kiểm tra",
              styleText: {
                color: "#eb2f96",
                fontWeight: "bold",
                fontSize: 12
              },
              action: {
                type: "make-a-call",
                ref: "*101#"
              }
            }
          ]
        }
      ],
      styleClasses: ["telco-receiver-container"],
      isSender: false
    },
    {
      items: [
        {
          type: "ROW",
          styleClasses: ["align-items-center"],
          fields: [
            {
              type: "COLUMN",
              styleClasses: ["recommend-padding"],
              style: {
                backgroundColor: "#f6faff",
                width: "100%",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
              },
              fields: [
                {
                  type: "ROW",
                  styleClasses: ["align-items-center"],
                  fields: [
                    {
                      type: "COLUMN",
                      fields: [
                        {
                          type: "COLUMN",
                          style: {
                            borderColor: "#e8e8e8",
                            borderWidth: 1,
                            backgroundColor: "#ffffff",
                            marginRight: 6
                          },
                          fields: [
                            {
                              type: "ICON",
                              name: "ic_telco_phone",
                              size: 32
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "ROW",
                      style: { flex: 1 },
                      styleClasses: ["justify-content-space-between"],
                      fields: [
                        {
                          type: "TEXT",
                          value: "Nạp tiền điện thoại",
                          variant: "subTitle",
                          weight: "bold"
                        },
                        {
                          type: "TEXT",
                          value: "19:02",
                          variant: "subTitle",
                          color: "#b9b9b9"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "COLUMN",
          styleClasses: ["recommend-padding-left", "recommend-padding-right"],
          style: { alignItems: "flex-end" },
          fields: [
            {
              type: "TEXT",
              value: "Bạn đã nạp tiền điện thoại cho",
              variant: "subTitle"
            },
            {
              type: "TEXT",
              value: "PHAN THI HONG HANH",
              variant: "subTitle",
              weight: "bold"
            }
          ]
        },
        {
          type: "ROW",
          styleClasses: [
            "justify-content-space-between",
            "align-items-center",
            "recommend-padding-right"
          ],
          fields: [
            {
              type: "ICON",
              name: "ic_telco_MobiFone",
              style: { width: 76, height: 41 }
            },
            {
              type: "TEXT",
              value: "100.000đ",
              variant: "h3",
              weight: "bold"
            }
          ]
        }
      ],
      styleClasses: ["telco-sender-container"],
      isSender: true
    }
  ]
};
