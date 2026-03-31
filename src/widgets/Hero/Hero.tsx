import { FloatingText } from "@/widgets/Hero/ui/FloatingText";
import styles from "./Hero.module.scss";
import { Terminal } from "./ui/Terminal/Terminal";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <FloatingText text="portfolio.v1" />
      <h1>{t("hero.name")}</h1>
      <p className={styles.role}>{t("hero.role")}</p>
      <p className={styles.location}>
        {t("hero.country")}, {t("hero.city")}
      </p>
      <Terminal />
    </section>
  );
};
