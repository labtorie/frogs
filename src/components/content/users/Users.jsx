import React from 'react'
import styles from "./Users.module.css"
import defaultPicture from "../../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={`${props.isFetching ? styles.fetchingUser : styles.readyUser}`}>
            <div className={styles.userWrapper}>
                <div className={styles.pPicture}>
                    <img src={props.pPictureURL !== null ? props.pPictureURL : defaultPicture}/>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>{props.name}</span> {props.status !== null ? ` | ` : ''}
                    <span className={styles.status}>{props.status}</span>
                </div>
            </div>
        </div>
    )
}

const Users = (props) => {

    let pages = []
    for (let i = 1; i <= Math.ceil(props.usersCount / props.pageSize); i++) {
        pages.push(i)
    }
    let pageButtons = pages.map(
        page => {
            return <span className={`${props.currentPage === page && styles.currentPage} ${styles.page}`}
                         onClick={() => props.selectPage(page)}>{page}</span>
        }
    )

    let users = props.users.map(
        user => {
            return <NavLink className={styles.navlink} to={`/profile/${user.id}`}>
                <User pPictureURL={user.photos.small}
                      name={user.name}
                      status={user.status}
                      isFetching={props.isFetching}/>
            </NavLink>
        }
    )
    return (

        <div>
            <div className={styles.header}>
                <div className={styles.searchArea}><input placeholder='Имя пользователя'
                                                          onChange={props.onSearchInputUpdate}
                                                          value={props.searchInput}/>
                    <button onClick={props.onSearchUsers}>🔎</button>
                </div>

            </div>
            <div className={`${styles.usersGrid} ${props.isFetching ? styles.fetching : null}`}>
                {users}
            </div>
            <div className={styles.pageButtons}>
                {pageButtons}
            </div>
        </div>
    )
}

export default Users