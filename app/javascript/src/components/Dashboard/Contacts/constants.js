import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const CONTACTS_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES = buildSelectOptions(["Owner", "Admin", "Member"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});

export const PROFILE_PICTURE_URL =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const CONTACTS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
  {
    id: 2,
    firstName: "Joe",
    lastName: "Doe",
    email: "joedoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
  {
    id: 5,
    firstName: "Joe",
    lastName: "Doe",
    email: "joedoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
  {
    id: 6,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    role: "Owner",
    imageUrl: PROFILE_PICTURE_URL,
    createdAt: new Date("February 5, 2021"),
  },
];
