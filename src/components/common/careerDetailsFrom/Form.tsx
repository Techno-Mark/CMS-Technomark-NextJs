import { useState } from "react";
import Button from "../button/button";

type FormDataType = {
  fullName: string;
  email: string;
  mobileNo: string;
  coverLetter: FileList | null;
  resume: FileList | null;
  agreeTermsConditions: boolean;
};

const Form = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    mobileNo: "",
    coverLetter: null,
    resume: null,
    agreeTermsConditions: false,
  });

  const [formErr, setFormErr] = useState<any>({
    fullName: "",
    email: "",
    mobileNo: "",
    coverLetter: "",
    resume: "",
    agreeTermsConditions: "",
  });

  const validate = () => {
    const availableErrors: Partial<Record<keyof FormDataType, string>> = {};
    (Object.keys(formData) as any).forEach((key: keyof FormDataType) => {
      if (!formData[key]) {
        if (key === "agreeTermsConditions") {
          availableErrors[key] = "Please agree to terms & conditions";
        } else {
          availableErrors[key] = "Field is required";
        }
      }
    });

    setFormErr(availableErrors);
  };

  const handleSubmit = () => {
    validate();

    if (Object.values(formErr).some((value) => !value)) {
      return;
    } else {
      console.log("submitted");
    }
  };

  return (
    <div className="py-10 lg:py-20 px-5 md:px-28 bg-white border rounded-[20px]  flex flex-col shadow-career-form !w-full">
      <p className="mb-10 lg:mb-[60px] text-[#344968] text-[24px] lg:text-[30px] font-medium">
        Apply for this position
      </p>
      <div className="flex flex-col gap-10">
        <div>
          <label className="text-[#344968] text-xl font-normal">
            Full name
          </label>
          <input
            type="text"
            value={formData.fullName}
            className="h[52px] text-black w-full border-b border-b-[#344968] outline-none"
            onChange={(e) => {
              setFormErr({ ...formErr, fullName: "" });
              setFormData({ ...formData, fullName: e.target.value });
            }}
          />
          {!!formErr.fullName && (
            <p className="mt-0.5 text-base text-red-600">{formErr.fullName}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-[#344968] text-xl font-normal">
            E-mail
          </label>
          <input
            id="email"
            value={formData.email}
            type="text"
            className="h[52px] text-black w-full border-b border-b-[#344968] outline-none"
            onChange={(e) => {
              setFormErr({ ...formErr, email: "" });
              setFormData({ ...formData, email: e.target.value });
            }}
            onBlur={(e) => {
              if (
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.trim())
              ) {
                setFormErr({ ...formErr, email: "Email is not valid" });
              }
            }}
          />
          {!!formErr.email && (
            <p className="mt-0.5 text-base text-red-600">{formErr.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="mobileNo"
            className="text-[#344968] text-xl font-normal"
          >
            Mobile Number
          </label>
          <input
            id="mobileNo"
            type="text"
            value={formData.mobileNo}
            className="h[52px] text-black w-full border-b border-b-[#344968] outline-none"
            onChange={(e) => {
              if (e.target.value.length > 10) {
                return;
              } else if (!/^[0-9\s]*$/.test(e.target.value)) {
                return;
              } else {
                setFormErr({ ...formErr, mobileNo: "" });
                setFormData({
                  ...formData,
                  mobileNo: e.target.value.trim(),
                });
              }
            }}
          />
          {!!formErr.mobileNo && (
            <p className="mt-0.5 text-base text-red-600">{formErr.mobileNo}</p>
          )}
        </div>
        <div className="w-full relative">
          <label
            htmlFor="uploadResume"
            className="text-[#344968] text-xl font-normal cursor-pointer"
          >
            Cover Letter
          </label>
          <input
            id="uploadResume"
            type="file"
            className={`absolute left-0 bottom-0 w-full text-lg ${
              !!formData.coverLetter ? "" : "text-opacity-0"
            } text-black file:hidden`}
            placeholder="Upload CV/Resume"
            onChange={(e) => {
              setFormErr({ ...formErr, coverLetter: "" });
              setFormData({ ...formData, coverLetter: e.target.files });
            }}
          />
          <label htmlFor="uploadResume" className="cursor-pointer">
            <img
              src="/images/upload.svg"
              className="absolute right-0 top-0 w-7 h-"
            />
          </label>
          <hr className="mt-[22px] w-full h-[1px] border-t border-t-[#344968]" />
          {!!formErr.coverLetter && (
            <p className="mt-0.5 text-base text-red-600">
              {formErr.coverLetter}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <label
            htmlFor="uploadResume"
            className="text-[#344968] text-xl font-normal cursor-pointer"
          >
            Upload CV/Resume
          </label>
          <input
            id="uploadResume"
            type="file"
            className={`absolute left-0 bottom-0 w-full text-lg ${
              !!formData.resume ? "" : "text-opacity-0"
            } text-black file:hidden`}
            placeholder="Upload CV/Resume"
            onChange={(e) => {
              setFormErr({ ...formErr, resume: "" });
              setFormData({ ...formData, resume: e.target.files });
            }}
          />
          <label htmlFor="uploadResume" className="cursor-pointer">
            <img
              src="/images/upload.svg"
              className="absolute right-0 top-0 w-7 h-"
            />
          </label>
          <hr className="mt-[22px] w-full h-[1px] border-t border-t-[#344968]" />
          {!!formErr.resume && (
            <p className="mt-0.5 text-base text-red-600">{formErr.resume}</p>
          )}
        </div>
        <div>
          <input
            id="agreeTermsAndCondition"
            type="checkbox"
            className=""
            checked={formData.agreeTermsConditions}
            onChange={(e) =>
              setFormData({
                ...formData,
                agreeTermsConditions: e.target.checked,
              })
            }
          />
          <label
            htmlFor="agreeTermsAndCondition"
            className="ml-2 text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#1D3557] text-end"
          >
            By using this form you agree with the storage and handling of your
            data by this website.
          </label>
          {!!formErr.agreeTermsConditions && (
            <p className="mt-0.5 text-base text-red-600">
              {formErr.agreeTermsConditions}
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex items-start">
        <div>
          <Button text="Apply now" variant="primary" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Form;
