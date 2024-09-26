import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./footer.module.css"

interface FooterProps {
  footerData: {
    name: string;
    children: {
      name: string;
      link: string;
    }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className={styles.footerContainer}>
      <div
        className={styles.footerarrow}
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      >
        <Image
          src="/images/footerarrow.svg"
          alt="footer arrow"
          height={54}
          width={54}
        />
      </div>
      <div className="container mx-auto w-full pt-20 pb-16 lg:pt-20">
        <div className="md:flex md:justify-between">
          <div className={`${styles.footerdetails} mb-10 md:mb-0`}>
            <Link href="/" className={`${styles.footerlogo} flex items-center`}>
              <Image
                src="/images/footerlogo.svg"
                alt="Logo"
                height={80}
                width={80}
              />
            </Link>
            <div className={styles.footerlogotext}>
              <h3>
                Experience the New way of <span>Developments</span>
              </h3>
            </div>
            <div className={`${styles.companyinfo} flex flex-col my-8`}>
              <Link
                href="tel:+1-2063471395"
                className="flex items-center w-fit"
              >
                <Image
                  src="/images/Phone.svg"
                  alt="phone"
                  height={22}
                  width={22}
                />
                <span>USA: +1 (206) 347 1395</span>
              </Link>
              <Link
                href="tel:+44-2034236509"
                className="flex items-center w-fit"
              >
                <Image
                  src="/images/Phone.svg"
                  alt="contact"
                  height={22}
                  width={22}
                />
                <span>UK: +44 (203) 423 6509</span>
              </Link>
              <Link
                href="https://wa.me/7069008181"
                target="_blank"
                className="flex items-center w-fit"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="whatsapp"
                  height={22}
                  width={22}
                />
                <span>Whatsapp | +91 - 7069008181</span>
              </Link>
              <Link
                href="mailto:info@technomark.io"
                className="flex items-center w-fit"
              >
                <Image
                  src="/images/mail.svg"
                  alt="mail"
                  height={22}
                  width={22}
                />
                <span>info@technomark.io</span>
              </Link>
            </div>
            <div className={`${styles.sociallinks} flex`}>
              <Link
                href="https://www.facebook.com/TechnoMarkio"
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src="/images/facebook1.svg"
                  alt="facebook"
                  height={54}
                  width={54}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@TechnoMarkSolutions"
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src="/images/youtube1.svg"
                  alt="youtube"
                  height={54}
                  width={54}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/technomarkio/"
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src="/images/linkedin1.svg"
                  alt="linkedin"
                  height={54}
                  width={54}
                />
              </Link>
              <Link
                href="https://twitter.com/Technomark_io"
                target="_blank"
                className="flex items-center justify-center"
              >
                <Image
                  src="/images/twitter1.svg"
                  alt="twitter"
                  height={54}
                  width={54}
                />
              </Link>
            </div>
          </div>
          <div
            className={`${styles.footerlinks} grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4`}
          >
            {footerData?.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="mb-6 font-medium text-white capitalize">
                  {section.name.trim() ? section.name : <p className={`${styles.extraDot}`}>.</p>}
                </h3>
                <ul className={styles.footerlinksul}>
                  {section.children.map((link, linkIndex) => (
                    <li className="mb-4" key={linkIndex}>
                      <Link href={link.link}>
                        <span className="md:text-[1.1rem]">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.footerbottom} py-6`}>
        <div className="container sm:flex sm:items-center sm:justify-between mx-auto">
          <span className={styles.footerbottomleft}>
            Copyright © 2024 <Link href="/">TechnoMark.</Link> All Rights
            Reserved.
          </span>
          <div
            className={`${styles.footerbottomright} flex mt-4 sm:justify-center sm:mt-0`}
          >
            <Link href="/">Terms of Use</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
