import {SCAN_DATA} from "../../constans.js";
import {QRCodeSVG} from 'qrcode.react'
import styles from "./History.module.css";


export const ScanHistory = () => {
    const data =
        JSON.parse(localStorage
            .getItem(SCAN_DATA) || '[]')

    return(
        <div className={styles.container}>
            {data.map((text) => (
                <p className={styles.part} key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100} />
                </p>
            ))}
        </div>
    )
}