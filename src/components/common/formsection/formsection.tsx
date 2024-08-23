import React, { useState } from "react";
import styles from "./formsection.module.css";
import Image from "next/image";
import Button from "../button/button";
import { toast } from "react-toastify";

interface FormSectionData {
  text: string;
}

interface FormProps {
  props?: {
    data: FormSectionData[];
  };
  techstartupform?: boolean;
}

const FormSection: React.FC<FormProps> = ({ props, techstartupform }: any) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setErrors((prev) => ({ ...prev, [id]: "" }));

    if (id === "mobileNumber") {
      const filteredValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [id]: filteredValue }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "E-mail is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid e-mail address";
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
    }
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}contact-us/save`,
        {
          method: "POST",
          headers: {
            referal: "http://localhost:3001",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            companyName: formData.companyName,
            // message: null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
      });
      setErrors({
        fullName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div
        className={`flex flex-wrap ${styles.formcontainer} ${
          techstartupform ? styles.techstartupform : ""
        }`}
      >
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>{props?.find((item: any) => item.title)?.title || ""}</h3>
            <ul>
              {props
                ?.find((item: any) => item.Data)
                ?.Data.map((item: any, index: any) => (
                  <li key={index}>
                    {item.items.find((item: any) => item.text)?.text || ""}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.formright}>
          <div className={styles.formbubblebg}>
            <div className={styles.formbubblecircle}>
              <Image
                src="/images/gradient-bubble.svg"
                alt="bubble"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className={styles.formarea}>
            <h4>Request a Free Quote</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formwrap}>
                <input
                  className={`${styles.input} ${
                    errors.fullName ? styles.errorInput : ""
                  }`}
                  type="text"
                  id="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className={styles.errorMessage}>{errors.fullName}</p>
                )}
              </div>
              <div className={styles.formwrap}>
                <input
                  className={`${styles.input} ${
                    errors.email ? styles.errorInput : ""
                  }`}
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
              <div className={styles.formwrap}>
                <input
                  className={`${styles.input} ${
                    errors.mobileNumber ? styles.errorInput : ""
                  }`}
                  type="tel"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  maxLength={10}
                />
                {errors.mobileNumber && (
                  <p className={styles.errorMessage}>{errors.mobileNumber}</p>
                )}
              </div>
              <div className={styles.formwrap}>
                <input
                  className={`${styles.input} ${
                    errors.companyName ? styles.errorInput : ""
                  }`}
                  type="text"
                  id="companyName"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <p className={styles.errorMessage}>{errors.companyName}</p>
                )}
              </div>
              <div className="formbtn">
                <Button
                  text="Send Request"
                  variant="primary"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
