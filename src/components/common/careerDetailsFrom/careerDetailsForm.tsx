import React from "react";
import TechExpertForm from "./TechExpertForm";
import Form from "./Form";
import styles from "./careerDetails.module.css";

const CareerDetailsForm = ({ props }: any) => {
  return (
    <div className="w-full flex bg-white items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between overflow-auto">
        {!!props && (
          <div className={`my-10 mx-4 md:mx-10 lg:w-1/2 text-black ${styles.techstartupbox}`}>
            <p
              dangerouslySetInnerHTML={{
                __html: props || "",
              }}
            />
          </div>
        )}
        <div className="my-10 mx-4 md:mx-24 lg:w-1/2 flex items-start justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsForm;
