import css from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { selectError } from "../../redux/contacts/selectors";

const innitials = {
  name: "",
  number: "",
};

const telPattern = /^\d{3}-\d{3}-\d{3}$/;
const patternErrMsg = "Number should follow this pattern 111-111-111";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .trim()
    .matches(telPattern, patternErrMsg)
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const error = useSelector(selectError);
  const nameId = useId();
  const telId = useId();
  const dispatch = useDispatch();

  function handleSubmit({ name, number }, actions) {
    dispatch(addContact({ name, number }));
    actions.resetForm();
  }

  return (
    <div className={css.container}>
      <Formik
        initialValues={innitials}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldBlock}>
            <label htmlFor={nameId} className={css.caption}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameId}
              className={css.field}
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.fieldBlock}>
            <label htmlFor={telId} className={css.caption}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id={telId}
              className={css.field}
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button type="submit" className={css.addBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
      {error && <ErrorBlock message={error} />}
    </div>
  );
}
