import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assigned_contact: null,
  tags: [],
};

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

export const ASSIGNED_CONTACTS = [
  { label: "John Doe", value: "1" },
  { label: "Jane Doe", value: "2" },
  { label: "Joe Doe", value: "3" },
];
export const TAGS = [
  { label: "Getting Started", value: "1" },
  { label: "Onboarding", value: "2" },
  { label: "User Flow", value: "3" },
  { label: "UX", value: "4" },
  { label: "Bugs", value: "5" },
  { label: "v2.0", value: "6" },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contact: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .oneOf(ASSIGNED_CONTACTS.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(ASSIGNED_CONTACTS.map(contact => contact.value)),
    })
    .required("Assigned Contact is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "At least one tag is required")
    .required("Tags are required"),
});

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
