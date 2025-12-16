import { FcGoogle } from "react-icons/fc";

import type { JSX } from "react";

import styles from "./SocialLoginButton.module.css";

type SocialLoginButtonProps = {
  icon: string;
  text: string;
  runFunction: () => Promise<void>;
};

const ICONS: {
  [key: string]: JSX.Element;
} = {
  google: <FcGoogle />,
};

const SocialLoginButton = ({
  icon,
  text,
  runFunction,
}: SocialLoginButtonProps) => {
  return (
    <div onClick={runFunction} className={styles.socialLogin}>
      {ICONS[icon]}
      <span>{text}</span>
    </div>
  );
};

export default SocialLoginButton;
