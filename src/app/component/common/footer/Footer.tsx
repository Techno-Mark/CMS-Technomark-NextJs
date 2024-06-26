import Link from "next/link";
import styles from "./footer.module.css";
const Footer = (props: any) => {
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:pt-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" className="h-14 me-3" alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {props.props.map((x: any) => (
              <div>
                <h3 className="mb-6 font-medium min-h-6 text-white capitilize">
                  {x.title}
                </h3>
                <ul className="text-white">
                  {x.child.map((d: any) => (
                    <li className="mb-4">
                      <Link
                        href={d.path}
                        className="text-[1rem] hover:underline"
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
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2024{" "}
            <Link href="/" className="hover:underline">
              TechnoMark.
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">H</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
