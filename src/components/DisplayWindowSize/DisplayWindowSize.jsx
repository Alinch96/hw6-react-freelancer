import clsx from "clsx";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import styles from "./DisplayWindowSize.module.css";

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  const getIcon = () => {
    if (width >= 1024) return <FaDesktop size={40} />;
    if (width >= 768) return <FaTabletAlt size={40} />;
    return <FaMobileAlt size={40} />;
  };

  return (
    <section className={styles.container}>
      <div className={styles.iconWrap}>{getIcon()}</div>
      <p className={clsx(styles.size, width < 768 && styles.sizeMobile)}>
        {width} × {height}
      </p>
    </section>
  );
};

export default DisplayWindowSize;
