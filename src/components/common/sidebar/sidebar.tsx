import React, { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import Button from "../button/button";

interface SidebarProps {
    isDrawerVisible: boolean;
    toggleDrawer: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isDrawerVisible, toggleDrawer }) => {

    return (
        <section className={`${styles.sidebar} ${isDrawerVisible ? styles.showDrawer : ""}`} id={styles.sidebarpopup} >
            <button type="button" className={styles.sidebarbtn} onClick={toggleDrawer}> START A NEW PROJECT</button>
            <div className={styles.sidebarimgs}>
                <div className={styles.imgone}>
                    <Image src="/images/border-shape-new.png" alt="arrow" width={40} height={50} />
                </div>
                <div className={styles.imgtwo}>
                    <Image src="/images/animate-arrow.png" alt="arrow" className="animate-spin-slow" width={50} height={50}/>
                </div>
            </div>
            <div id="drawer"
                className={`${styles.drawer}`}>
                <div className="flex justify-end">
                    <button className={styles.closeButton} onClick={toggleDrawer}>
                        <Image src="/images/close.png" alt="close" width={24} height={24} />
                    </button>
                </div>
                <div className={`container mx-auto ${styles.container}`}>
                    <div className={styles.formcirlerotate}>
                        <Image
                            src="/images/form-circle.png"
                            alt="circle"
                            width={250}
                            height={250}
                        />
                    </div>
                    <h3 className={`${styles.formtitle}`}>Request for Quotes.</h3>
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
                                    type="text"
                                    placeholder="Type your fullname"
                                    id="fullName"
                                    name="fullName"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">What&apos;s your email address?</label>
                                <input
                                    type="email"
                                    placeholder="Type email address"
                                    id="email"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-10">
                            <div className="flex flex-col">
                                <label htmlFor="phone">What&apos;s your mobile number?</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    maxLength={10}
                                    minLength={10}
                                    placeholder="+91 00000 00000"
                                    onInput={(e) =>
                                    (e.currentTarget.value = e.currentTarget.value.replace(
                                        /[^0-9]/g,
                                        ""
                                    ))
                                    }
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="organizationName">
                                    What&apos;s your organization name?
                                </label>
                                <input
                                    type="text"
                                    id="organizationName"
                                    name="organizationName"
                                    placeholder="Company name"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 mb-10">
                            <label htmlFor="projectDescription">
                                Tell us about your project
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                placeholder="Type"
                                className=""
                            />
                        </div>
                        <div className="submitbtn">
                            <Button href="#" variant="primary" text="SEND REQUEST" />
                        </div>
                    </form>
                    <div id="message" className="text-green-500 mt-4 hidden">
                        Form submitted successfully
                    </div>
                    <div id="errorMessage" className="text-red-500 mt-4 hidden">
                        Failed
                    </div>
                </div>
            </div>
            {isDrawerVisible && (
                <div id="overlay" className={styles.overlay} onClick={toggleDrawer}></div>
            )}
        </section>
    );
};

export default Sidebar;
