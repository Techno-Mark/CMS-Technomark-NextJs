import TitleSection from "@/components/common/title/title";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../../[page]/home.module.css";
import CareerDetailsForm from "@/components/common/careerDetailsFrom/careerDetailsForm";
import CurrentOpenings from "@/components/common/currentOpenings/currentOpenings";
import Team from "@/components/common/team/team";

const index = () => {
  const param = useParams();
  const [idData, setIdData] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const apiCall = async (id: any) => {
    try {
      const url = `${
        process.env.NEXT_PUBLIC_API_URL || ""
      }career/getById/${id}`;

      const res = await axios.get(url, {
        headers: {
          referal: process.env.REFERAL_HEADER || "http://localhost:3001",
        },
      });
      setIdData(res.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const apiCallForm = async (param: any) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug/${param}`,
        {
          headers: {
            referal: process.env.REFERAL_HEADER || "http://localhost:3001",
          },
        }
      );
      setData(res.data.data.formatData);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (param?.id) {
      apiCall(param.id);
    }
  }, [param]);

  useEffect(() => {
    apiCallForm("careerDetails");
  }, []);

  const renderSection = (sectionName: string, sectionData: any) => {
    switch (sectionName) {
      case "Team Speak":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-white`}
            >
              <Image
                className={styles.clientcurve}
                src="/images/client-shape.png"
                alt="shape"
                height={1060}
                width={1930}
              />
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: "",
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <Team props={sectionData.data ? sectionData.data : []} />
              </div>
            </section>
          )
        );
      case "Current Openings":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: "",
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <CurrentOpenings data={!!sectionData ? sectionData : []} />
              </div>
            </section>
          )
        );
    }
  };

  return (
    <div>
      <section className={`${styles.careerTitle} tm-section bg-white`}>
        <div className="container mx-auto lg:w-[60%]">
          <p className={`!mb-8 ${styles.casestudylistlabel}`}>CAREER</p>
          <TitleSection
            sectionData={{
              title: !!idData ? idData.jobTitle : "",
              subtitle: !!idData ? idData.subTitle : "",
            }}
            titleFirst={true}
            titleClassName="clienttitle"
          />
          <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-12 md:flex-row bg-[#F4FBF6] text-[#1D3557] border rounded-lg border-[#D4EBCC] py-4 md:px-[10%] lg:px-[10%]">
            {!!idData && (
              <>
                <span className="mx-1 flex gap-2.5 text-xl font-medium whitespace-nowrap">
                  <Image
                    className="w-7"
                    src="https://crm-stageapi.pacificabs.com:3004/public/TM/images/brifecase-tick-1726213525960.png"
                    width={100}
                    height={100}
                    alt={""}
                  />
                  <p className="font-bold">Experience</p>
                  <p className="group-hover:underline duration-700">
                    {!!idData.yearsOfExperience ? idData.yearsOfExperience : ""}
                  </p>
                </span>
                <span className="mx-1 flex gap-2.5 text-xl font-medium whitespace-nowrap">
                  <Image
                    className="w-7"
                    src="https://crm-stageapi.pacificabs.com:3004/public/TM/images/profile-2user-1726213525960.png"
                    width={100}
                    height={100}
                    alt={""}
                  />
                  <p className="font-bold">No. of openings</p>
                  <p className="group-hover:underline duration-700">
                    {!!idData.numberOfPosition ? idData.numberOfPosition : ""}
                  </p>
                </span>
                <span className="mx-1 flex gap-2.5 text-xl font-medium whitespace-nowrap">
                  <Image
                    className="w-7"
                    src="https://crm-stageapi.pacificabs.com:3004/public/TM/images/house-2-1726213525960.png"
                    width={100}
                    height={100}
                    alt={""}
                  />
                  <p className="font-bold">Mode</p>
                  <p className="group-hover:underline duration-700">
                    {!!idData.mode ? idData.mode : ""}
                  </p>
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.careerTitle} tm-section bg-white`}>
        <div className="container mx-auto">
          <CareerDetailsForm props={!!idData ? idData.description : ""} />
        </div>
      </section>

      {!!data &&
        data.map((sectionName: any, index: number) => (
          <React.Fragment key={index}>
            {Object.entries(sectionName).map(([key, value]) => (
              <div key={key}>{renderSection(key, value)}</div>
            ))}
          </React.Fragment>
        ))}
    </div>
  );
};

export default index;
