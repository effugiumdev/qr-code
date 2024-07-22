import {Scanner} from '@yudiel/react-qr-scanner'
import React from "react";
import styles from './QrCodeScanner.module.css'

import {SCAN_DATA} from "../../constans.js";

export const QrCodeScanner = () => {
    const [scanned, setScanned] = React.useState(null)
    const scanHandler = (result) => {
        setScanned(result[0].rawValue)

        const prevData =
            JSON.parse(localStorage
                .getItem(SCAN_DATA) || '[]')


        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify(
                [...prevData, result[0].rawValue]))
    }


    return (
        <div className={styles.container}>
            <Scanner
                // allowMultiple
                onScan={scanHandler}
                components={{
                    audio: false,
                    // finder: false
                }}
                styles={{container: {width: 200}}}
            />
            <b className={styles.result}>{scanned}</b>

        </div>
    )
}