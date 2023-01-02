import { ReactComponent as BarberShopLogo } from "../../assets/Barber.svg";

import styles from "./ProfileHolder.module.css";

const ProfileHolder = ({
  profileName,
  profileImg,
}: {
  profileName?: string;
  profileImg?: string;
}) => {
  return (
    <div className={styles.logoName}>
      {!profileImg ? <BarberShopLogo /> : profileImg}
      <h1>
        {profileName ? (
          profileName
        ) : (
          <>
            <span>Title</span> Of <span>Bussiness</span>
          </>
        )}
      </h1>
    </div>
  );
};

export default ProfileHolder;
