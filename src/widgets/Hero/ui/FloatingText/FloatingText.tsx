import { MotionBox } from "@/shared/ui/MotionBox";
import styles from './FloatingText.module.scss';

export const FloatingText = ({ text }: { text: string }) => {
  return (
    <MotionBox
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
      className={styles.text}
    >
      {text}
    </MotionBox>
  );
};
