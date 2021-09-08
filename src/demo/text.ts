import { IData } from "../components/SectionContainer";

interface ICards {
  cards: Array<IData>;
}

export const block_text: ICards = {
  cards: [
    {
      items: [
        {
          type: "COLUMN",
          fields: [
            { type: "TEXT", value: "Đây là lời nhắn" },
            {
              type: "TEXT",
              value: "10:30",
              variant: "caption",
              color: "#b9b9b9"
            }
          ]
        }
      ],
      styleClasses: ["text-receiver-container"],
      isSender: false
    },
    {
      items: [
        {
          type: "COLUMN",
          fields: [
            { type: "TEXT", value: "Đây là lời nhắn", color: "white" },
            {
              type: "TEXT",
              value: "10:30",
              variant: "caption",
              color: "white",
              textAlign: "right"
            }
          ]
        }
      ],
      styleClasses: ["text-sender-container"],
      isSender: true
    }
  ]
};
