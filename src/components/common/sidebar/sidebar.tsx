import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import Button from "../button/button";

interface SidebarProps {
  isDrawerVisible: boolean;
  toggleDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDrawerVisible, toggleDrawer }) => {
  const [isWhiteSidebar, setIsWhiteSidebar] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid e-mail address";
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.message) newErrors.message = "Message is required";
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
              message: formData.message,
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
        clearAll();
        setTimeout(() => {
          setIsSuccess(0);
          setMessage("");
        }, 10000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const clearAll = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
    });
    setErrors({
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: "",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsWhiteSidebar(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${styles.sidebar} ${
        isDrawerVisible ? styles.showDrawer : ""
      } ${isWhiteSidebar ? styles.whitesidebar : ""}`}
      id={styles.sidebarpopup}
    >
      <button
        type="button"
        className={styles.sidebarbtn}
        onClick={toggleDrawer}
      >
        START A NEW PROJECT
      </button>

      <div className={styles.sidebarimgs}>
        <div className={styles.imgone}>
          <Image
            src="/images/border-shape-new.png"
            alt="arrow"
            width={40}
            height={50}
          />
        </div>
        <div className={styles.imgtwo}>
          <Image
            src="/images/animate-arrow.png"
            alt="arrow"
            className="animate-spin-slow"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div id="drawer" className={styles.drawer}>
        <div className="flex justify-end">
          <button
            className={styles.closeButton}
            onClick={() => {
              toggleDrawer();
              clearAll();
            }}
          >
            <Image src="/images/close.png" alt="close" width={24} height={24} />
          </button>
        </div>

        <div
          className={`container lg:max-w-[80%] xl:max-w-[60%] h-[90vh] flex flex-col lg:mt-10 xl:mt-28 mx-auto justify-center ${styles.container}`}
        >
          <div className={styles.formcirlerotate}>
            <Image
              src="/images/form-circle.png"
              alt="circle"
              width={250}
              height={250}
            />
          </div>
          <h3 className={styles.formtitle}>Request a quote.</h3>
          <form id="projectForm" className={`${styles.projectform} mt-6`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <input
                type="hidden"
                name="formType"
                value="FormWithProjectDescription"
              />
              <div className="flex flex-col">
                <label htmlFor="fullName">What&apos;s your name?</label>
                <input
                  className={`${styles.input} ${
                    errors.fullName ? styles.errorInput : ""
                  }`}
                  type="text"
                  id="fullName"
                  placeholder="Type your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className={styles.errorMessage}>{errors.fullName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">What&apos;s your email address?</label>
                <input
                  className={`${styles.input} ${
                    errors.email ? styles.errorInput : ""
                  }`}
                  type="email"
                  id="email"
                  placeholder="Type Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-10">
              <div className="flex flex-col">
                <label htmlFor="phone">What&apos;s your mobile number?</label>
                <input
                  className={`${styles.input} ${
                    errors.mobileNumber ? styles.errorInput : ""
                  }`}
                  type="tel"
                  id="mobileNumber"
                  placeholder="00000 00000"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  maxLength={10}
                />
                {errors.mobileNumber && (
                  <p className={styles.errorMessage}>{errors.mobileNumber}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="organizationName">
                  What&apos;s your organization name?
                </label>
                <input
                  className={`${styles.input} ${
                    errors.companyName ? styles.errorInput : ""
                  }`}
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <p className={styles.errorMessage}>{errors.companyName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-4 mb-10">
              <label htmlFor="projectDescription">
                Tell us about your project
              </label>
              <textarea
                className={`${styles.input} ${
                  errors.companyName ? styles.errorInput : ""
                }`}
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>

            <div className={styles.submitbtn}>
              <Button
                text="SEND REQUEST"
                variant="primary"
                onClick={handleSubmit}
              />
            </div>

            {!!isSuccess && isSuccess === 2 && (
              <div className="mt-8">
                <p className="text-white bg-green-800 border border-white rounded-full text-center py-2 text:md md:text-xl">
                  Thank you for contacting us. Our team will get back to you
                  shortly.
                </p>
              </div>
            )}

            {!!isSuccess && isSuccess === 3 && (
              <div className="mt-8">
                <p className="text-white bg-red-500 border border-white rounded-full text-center py-2 text:md md:text-xl">
                  {message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {isDrawerVisible && (
        <div
          id="overlay"
          className={styles.overlay}
          onClick={toggleDrawer}
        ></div>
      )}
    </section>
  );
};

export default Sidebar;
