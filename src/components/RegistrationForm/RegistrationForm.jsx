import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const innitials = {
  name: "",
  email: "",
  password: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();
  const nameId = useId();

  function handleSubmit(data) {
    dispatch(register(data));
  }
  return (
    <Formik
      initialValues={innitials}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <h1 className={css.header}>Create your account</h1>
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
          <label htmlFor={emailId} className={css.caption}>
            Email
          </label>
          <Field
            type="text"
            name="email"
            id={emailId}
            className={css.field}
          ></Field>
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.fieldBlock}>
          <label htmlFor={passId} className={css.caption}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passId}
            className={css.field}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
