"use client";

import { FC, ReactNode, useEffect, useState } from "react";

import styles from "./button.module.css";
import { cn } from "../../_utils";

interface KeycapProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  activeKey: string;
}

const useKeyPress = (targetKey: string): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
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

export const Keycap: FC<KeycapProps> = ({
  activeKey,
  children,
  className,
  ...props
}) => {
  const isKeyDown = useKeyPress(activeKey);

  const keyClassName = cn(styles.key, className, {
    [styles.keyPressed]: isKeyDown,
  });

  return (
    <kbd {...props} className={keyClassName}>
      {children}
    </kbd>
  );
};
