import React, { useRef, useState } from "react";
import styles from "./form.module.sass";

export const Form: React.FC<{ onSetInput: (input: string) => void }> = (props) => {

    const inputTextRef = useRef<HTMLInputElement>(null);
    const [disable, setdisable] = useState(false);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredInput = inputTextRef.current!.value;
        if (enteredInput.trim().length === 0)
            return;
        props.onSetInput(enteredInput);
    }

    const validateInputHanlder = (event: any) => {
        const input = event.target.value; 
        input.trim().length === 0 ? setdisable(true) : setdisable(false);
    }

    console.log(disable);
    return (
        <div className={styles.formContent}>
            <div className={styles.labelBox}>
                Form
            </div>
            <form
                onSubmit={submitHandler}
                style={{ marginLeft: '1.5rem' }}>
                <input
                    ref={inputTextRef}
                    className={styles.inputBox}
                    placeholder='input'
                    onChange={validateInputHanlder}
                />
                
                <button
                    className={styles.buttonBox}
                    type='submit'
                    disabled = {disable}
                >
                    Calculate tags
                </button>
            </form>
        </div>
    )
}