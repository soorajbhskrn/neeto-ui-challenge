import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_CREATED = [
  {
    id: "kdsjkj2",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
  {
    id: "kdsjkj9",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
  {
    id: "kdsjkj3",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
  {
    id: "kdsjkj4",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
  {
    id: "kdsjkj1",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
  {
    id: "kdsjkj0",
    title: "How to claim the warranty?",
    description:
      "Are you getting my texts??, she texted to him. He glanced at it and chuckled under his breath. Ofcourse he was getting on them,but if he wasn't getting",
    createdAt: new Date("March 3, 2020"),
  },
];
