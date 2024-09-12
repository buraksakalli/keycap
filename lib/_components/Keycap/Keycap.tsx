"use client";

import { FC, ReactNode, useEffect, useState } from "react";

import styles from "./button.module.css";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  activeKey: string;
}

const useKeyPress = (targetKey: string): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};

export const Keycap: FC<KbdProps> = ({ activeKey, children, ...props }) => {
  const isKeyDown = useKeyPress(activeKey);

  const className = isKeyDown
    ? `${styles.key} ${styles.keyPressed}`
    : styles.key + ` ${props.className}`;

  return (
    <kbd {...props} className={className}>
      {children}
    </kbd>
  );
};
