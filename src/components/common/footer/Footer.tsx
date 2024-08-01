import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = (props: any) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className={styles.footerarrow} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <Image src="/images/footerarrow.svg" alt="footer arrow" height={54} width={54} />
      </div>
      <div className="container mx-auto w-full pt-20 pb-16 lg:pt-20">
        <div className="md:flex md:justify-between">
          <div className={`${styles.footerdetails} mb-10 md:mb-0`}>
            <Link href="/" className={`${styles.footerlogo} flex items-center`}>
              <Image
                src="/images/footerlogo.svg"
                className=""
                alt="Logo"
                height={120}
                width={100}
              />
            </Link>
            <div className={styles.footerlogotext}>
              <h3>
                Experience the New way of <span>Developments</span>
              </h3>
            </div>
            <div className={`${styles.companyinfo} flex flex-col my-12`}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Phone.svg"
                  alt="phone"
                  height={27}
                  width={27}
                />
                <span>USA: +1 (206) 347 1395</span>
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Phone.svg"
                  alt="contact"
                  height={27}
                  width={27}
                />
                <span>UK: +44 (203) 423 6509</span>
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/whatsapp.svg"
                  alt="whatsapp"
                  height={27}
                  width={27}
                />
                <span>Whatsapp | +91 -7069008181</span>
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/mail.svg"
                  alt="mail"
                  height={27}
                  width={27}
                />
                <span>info@technomark.io</span>
              </Link>
            </div>
            <div className={`${styles.sociallinks} flex`}>
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/images/facebook1.svg"
                  alt="facebook"
                  height={54}
                  width={54}
                />
              </Link>
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/images/youtube1.svg"
                  alt="youtube"
                  height={54}
                  width={54}
                />
              </Link>
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/images/linkedin1.svg"
                  alt="linkedin"
                  height={54}
                  width={54}
                />
              </Link>
              <Link href="/" className="flex items-center justify-center">
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
            className={`${styles.footerlinks} grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4`}
          >
            {props.props.map((x: any, index: any) => (
              <div key={index}>
                <h3 className="mb-6 font-medium min-h-6 text-white capitilize">
                  {x.title}
                </h3>
                <ul className={styles.footerlinksul}>
                  {x.child.map((d: any, index: any) => (
                    <li className="mb-4" key={index}>
                      <Link
                        href={d.path}
                        className="text-[1rem]"
                      >
                        {d.name}
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
        <div className={`container sm:flex sm:items-center sm:justify-between mx-auto`}>
          <span className={`${styles.footerbottomleft} `}>
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
  );
};
export default Footer;
