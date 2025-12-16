"use client"
import React, { useState } from "react";
import styles from "./login.module.css";
import { User, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SocialLoginButton from "../SocialLoginButon/SocialLoginButton";

export default function Login() {
    return (
        <div className={styles.login}>
                <Image
            className={styles.logo}
                            src="/logo/logo.png"
                            alt="logo"
                            width={150}
                            height={50}
            />
            <form className={styles.form}> 
                <div className={styles.input}>
                    <User />
                    <input type="email" placeholder="Email" />
                </div>
                
                <div className={styles.password}>
                    <div className={styles.input}>
                        <Lock />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className={styles.option}>
                        <div className={styles.remember}>
                        <input type="checkbox" /> Remember me
                    </div>
                    <div className={styles.forgot}>
                        Forgot password?
                    </div>
                    </div>
                    
                </div>
                
                
                
                <div className={styles.button}>
                    <button type="submit">Get Started</button>
                </div>
                
            </form>
            <div className={styles.signup}>
                <p>Don't have an account? <Link href={""}><b>Sign up</b></Link></p>
            </div>
            <div className={styles.divider}>
                <span>OR</span>
            </div>

            
            <SocialLoginButton
                icon="google"
                text="Login with Google"
                runFunction={async () => {}}
            />
        </div>
    );
}