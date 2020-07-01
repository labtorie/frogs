import React from 'react'
import styles from './Info.module.css'


const Info = (props) => {
    return (
        <div className={styles.infoWrapper}>
            <h3>Данный сайт не является каким-то коммерческим продуктом</h3>
            <span>
            И вообще он по приколу сделан и не надо плиз оставлять тут какие-то пернональные данные, использовать свои пароли и тд.
            Я за ваши данные ответственности не несу.
                </span>
        </div>
    )
}

export default Info