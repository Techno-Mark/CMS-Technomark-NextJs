import React, { useEffect, useState } from 'react';
import Button from "@/app/component/common/button/page";
import styles from "./formsection.module.css"


interface formsection {
    text: string;
}

interface formProps {
    props?: {
        data: formsection[];
    };
}


const formsection: React.FC<formProps> = ({ props }: any) => {
    return (
        <>
            <div className={`flex flex-wrap ${styles.formcontainer}`}>
                <div className={styles.formleft}>
                    <div className={styles.formtext}>
                        <h3>{props[0].title}</h3>
                        <ul>
                            {props[0]?.data?.map((item: any, index: any) => {
                                return (
                                    <li key={index}>
                                        {item.text}
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.formright}>
                    <div className={styles.formbubblebg}>
                        <div className={styles.formbubblecircle}>
                            <img src="/images/gradient-bubble.svg" alt="bubble" />
                        </div>
                    </div>
                    <div className={styles.formarea}>
                        <h4>Request a Free Quote</h4>
                        <div className={styles.formwrap}>
                            <input className="required" type="text" id="fullName" placeholder="Full name" />
                        </div>
                        <div className={styles.formwrap}>
                            <input className="required" type="mail" id="fullName" placeholder="E-mail" />
                        </div>
                        <div className={styles.formwrap}>
                            <input className="required" type="number" id="fullName" placeholder="Mobile Number" />
                        </div>
                        <div className={styles.formwrap}>
                            <input className="required" type="text" id="fullName" placeholder="Company name"/>
                        </div>
                        <div className='formbtn'>
                            <Button href="#" text="send request" variant="primary" />
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default formsection;
