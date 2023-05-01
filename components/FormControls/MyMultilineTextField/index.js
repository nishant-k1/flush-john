import React from "react";
import { useField } from "formik";
import styles from "../../QuickQuote/styles.module.css";
import Image from "next/image";

const MyMultilineTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;
  const { setValue, setTouched, setError } = helpers;
  return (
    <>
      <textarea
        {...field}
        {...props}
        className={props.className}
        placeholder={label}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {touched && error ? (
        <div
          className={styles.error}
          style={{ background: "red" }}
        >
          {error + " "}
          <span>
            <Image
              style={{ height: "1.5rem" }}
              src="/assets/error.png"
              height={24}
              width={24}
            />
          </span>
        </div>
      ) : null}
    </>
  );
};

export default MyMultilineTextField;
