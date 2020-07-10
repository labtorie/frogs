import React from 'react'
import styles from './Profile.module.css'
import defaultPicture from "../../../../assets/images/user.png"

const Profile = (props) => {
    return (
        <div className={`${styles.profileGrid} ${props.isFetching? styles.fetching : null}`}>
            <div className={styles.profilePic}><img
                src={props.profilePictureURL !== null ? props.profilePictureURL : defaultPicture} alt='Profile'/></div>
            <div className={styles.profileInfo}>
                <div className={styles.Name}><b>{props.name}</b><span> | id: {props.uid}</span></div>
                <div className={styles.Bio}>{props.bio}</div>
            </div>
            <div className={styles.menu}>
                <div className={styles.Button}>Написать</div>
                <div className={styles.Button}>Квакнуть</div>
            </div>
        </div>
    )
}

export default Profile