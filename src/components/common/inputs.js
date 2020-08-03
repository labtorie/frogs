import React from "react"
import styles from "./inputs.module.css"

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    // const hasError = true
    return (
        <div><input className={`${styles.Input} ${hasError && styles.error }`} {...input} {...props}/></div>
    )
}