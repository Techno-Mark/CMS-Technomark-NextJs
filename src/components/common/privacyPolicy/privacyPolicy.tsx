"use client"

import React from "react"

interface Section {
  heading: string;
  paragraphs: string[];
}

interface PrivacyPolicyProps {
  content: {
    title: string;
    sections: Section[];
  };
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ content }) => {
  return (
    <div className="w-full min-h-screen py-7 md:py-10">
      <div className="container">
        <div className="mb-8 font-bold !text-4xl">{content.title}</div>

        {content.sections.map((section, index) => (
          <div
            key={index}
            className="font-normal pb-4 text-[(var(--secondary--color))]"
          >
            <div className="!text-xl pb-3 font-bold">{section.heading}</div>
            <div
              className="!text-lg pb-3 font-normal"
              dangerouslySetInnerHTML={{
                __html: section.paragraphs
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrivacyPolicy
