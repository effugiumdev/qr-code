import {QRCodeSVG} from 'qrcode.react'
import {GENERATE_DATA} from "../../constans.js";
import styles from './History.module.css'

export const GenerateHistory = () => {
    const data =
        JSON.parse(localStorage
            .getItem(GENERATE_DATA) || '[]')

    return (
        <div className={styles.container}>
            {data.map((text) => (
                <p className={styles.part} key={text}>
                    <QRCodeSVG value={text} size={100}/>
                    {text}

                </p>
            ))}
        </div>
    )
}