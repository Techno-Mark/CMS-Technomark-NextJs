import React, { useEffect, useRef, useState } from "react";
import styles from "./formsection.module.css";
import Image from "next/image";
import Button from "../button/button";
import { toast } from "react-toastify";

const ContactFormSection = ({ props }: any) => {
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
  const [isSuccess, setIsSuccess] = useState(0);
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

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
      if (isSuccess !== 1) {
        setIsSuccess(1);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}contact-us/save`,
          {
            method: "POST",
            headers: {
              referal: process.env.REFERAL_HEADER || "http://localhost:3001",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.fullName,
              email: formData.email,
              mobileNumber: formData.mobileNumber,
              companyName: formData.companyName,
            }),
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          setIsSuccess(3);
          setMessage(responseData.data.email);
          setTimeout(() => {
            setIsSuccess(0);
            setMessage("");
          }, 10000);
          return;
        }

        setIsSuccess(2);
        setTimeout(() => {
          setIsSuccess(0);
          setMessage("");
        }, 10000);

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
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setErrors({
          fullName: "",
          email: "",
          mobileNumber: "",
          companyName: "",
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

  return (
    <>
      <div
        className={`flex justify-center items-center flex-wrap ${styles.formcontainer}`}
      >
        <div className={styles.formleft}>
          <div className={styles.formtext}>
            <h3>{!!props.title ? props.title : ""}</h3>
            <p className={styles.desc}>
              {!!props.subTitle ? props.subTitle : ""}
            </p>
            <div className={styles.bannerline}></div>
            <b className={styles.bottomdesc}>
              {!!props.desc ? props.desc : ""}
            </b>
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
          <div className={styles.formarea} ref={formRef}>
            <h4>Let&apos;s Discuss</h4>
            <form>
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
              <div className={styles.formbtn}>
                <Button
                  text="SUBMIT"
                  variant="primary"
                  onClick={handleSubmit}
                />
              </div>

              {!!isSuccess && isSuccess === 2 && (
                <div className="mt-8">
                  <p className="text-green-800 text:md md:text-xl">
                    Thank you for contacting us. Our team will get back to you
                    shortly.
                  </p>
                </div>
              )}

              {!!isSuccess && isSuccess === 3 && (
                <div className="mt-8">
                  <p className="text-red-500 text:md md:text-xl">{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormSection;
