/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import TitleSection from "@/components/common/title/title";
import BlogList from "./blogList/BlogList";
import axios from "axios";
import FormSection from "@/components/common/formsection/formsection";

interface FormSectionData {
  formsection: any;
}

interface ApiResponse {
  data: {
    formatData: FormSectionData[];
  };
}

const Index: React.FC = () => {
  const [formData, setFormData] = useState<FormSectionData | null>(null);

  const apiCallForm = async (param: string) => {
    try {
      const res = await axios.get<ApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug/${param}`,
        {
          headers: {
            referal: "http://localhost:3001",
          },
        }
      );
      setFormData(res.data.data.formatData[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiCallForm("blogs");
  }, []);

  return (
    <>
      <section className={`${styles.casestudylist} tm-section bg-white`}>
        <div className="container mx-auto">
          <p className={styles.casestudylistlabel}>Resources</p>
          <TitleSection
            sectionData={{
              title: "Blogs & News",
              subtitle:
                "Explore & Discover the most outstanding articles that are trending on the Technologies which can enhance the way of Thinking & Innovation!",
            }}
            titleFirst={true}
            titleClassName="casestudylisttitle"
          />
          <BlogList />
        </div>
      </section>

      {formData?.formsection && (
        <section className={`${styles.formsection} tm-section bg-white`}>
          <div className="container mx-auto">
            <FormSection props={formData.formsection} />
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
