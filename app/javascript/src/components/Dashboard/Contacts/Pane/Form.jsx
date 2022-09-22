import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLES,
  PROFILE_PICTURE_URL,
} from "../constants";

const ContactForm = ({ onClose, contact, setContacts }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    setContacts(contacts => [
      {
        ...values,
        id: contacts.length + 1,
        role: values.role.label,
        imageUrl: PROFILE_PICTURE_URL,
        createdAt: new Date(),
      },
      ...contacts,
    ]);
    Toastr.success("Contact has  successfully created");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={values => handleSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full space-x-2">
              <Input
                className="w-full flex-grow-0"
                label="First Name"
                name="firstName"
                placeholder="Enter First Name"
              />
              <Input
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter Last Name"
              />
            </div>
            <Input
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
