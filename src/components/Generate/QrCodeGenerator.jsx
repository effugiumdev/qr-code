import {QRCodeSVG} from 'qrcode.react'
import {useState} from "react";

import styles from './QrCodeGenerator.module.css'
import {GENERATE_DATA} from "../../constans.js";

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        const prevData =
            JSON.parse(localStorage
                .getItem(GENERATE_DATA) || '[]')


        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify(
                [...prevData,value])
        )


        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }

    return (
        <div className={styles.container}>
            <input type="text "
                   value={value}
                   onChange={onChangeHandler}
                   placeholder='Введите сюда свой текст(:'
                   className={styles.input}
            />
            <button
                type='button'
                onClick={onClickHandler}
                className={styles.button}
            >
                Сгенерировать Qr код(:
            </button>

            {result !== '' && (
                <div className={styles.qrWrapper}>
                    <QRCodeSVG value={value} size={200}/>
                </div>
            )}
        </div>
    )
}