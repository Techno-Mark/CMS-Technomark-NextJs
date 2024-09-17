import React from "react";
import TechExpertForm from "./TechExpertForm";
import Form from "./Form";

const CareerDetailsForm = ({ props }: any) => {
  return (
    <div className="w-full flex bg-white">
      <div className="flex flex-col lg:flex-row overflow-auto">
        <div className="my-10 mx-4 md:mx-24 lg:w-1/2">
          <TechExpertForm props={!!props.data ? props.data : []} />
        </div>
        <div className="my-10 mx-4 md:mx-24 lg:w-1/2">
          <Form props={!!props ? props : []} />
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsForm;
