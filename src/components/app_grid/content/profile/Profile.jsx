import React from 'react'
import styles from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={styles.profileGrid}>
            <div className={styles.profilePic}><img src={require("./lol.jpg")} alt='Profile'/></div>
            <div className={styles.profileInfo}>
                <div className={styles.Name}><b>{props.state.name} {props.state.surname}</b><span> | {props.state.croaks} Кваков</span></div>
                <div className={styles.Bio}>{props.state.bio}</div>
            </div>

            <div className={styles.menu}>
                <div className={styles.Button}>Написать</div>
                <div className={styles.Button}>Квакнуть</div>
            </div>
        </div>
    )
}

export default Profile