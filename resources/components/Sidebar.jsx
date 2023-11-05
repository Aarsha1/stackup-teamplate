import styles from "@styles/sidebar.module.scss";
import SearchBar from "./SearchBar";
import { Menu } from "lucide-react";
import Tasks from "./Tasks";
import Lists from "./Lists";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h3 className={styles.title}>Menu</h3>
        <Menu className="icon" size={22} />
      </div>
      <SearchBar />
      <Tasks />
      <hr style={{ borderTop: "0.5px solid #D9D9D9" }} />
      <Lists />
      <hr style={{ borderTop: "0.5px solid #D9D9D9" }} />
    </div>
  );
};
export default Sidebar;