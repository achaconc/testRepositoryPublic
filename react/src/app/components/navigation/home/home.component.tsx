import styles from "./home.module.sass";
import React, { useState } from "react";
import { Tags } from "../../tags/tags.component";
import { Words } from "../../words/words.component";
import { Form } from "../../form/form.component";
import { fecthWordsTagger } from "../../../services/fetchWordsTagger.service";

export const Home: React.FunctionComponent = () => {

    const [words, setWords] = useState<string[]>();
    const [tags, setTags] = useState<[string, number][]>();
    const [input, setInput] = useState('');


    React.useEffect(() => {
        if (input) {
            fecthWordsTagger({ input, setTags, setWords });
        }
    }, [input])

    return (
        <div
            className={styles.content}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '8rem'
            }}
        >
            <Form onSetInput={setInput}></Form>
            <div className={styles.content}
                style={{
                    width: '30rem',
                    marginLeft: '1.5rem'
                }}
            >
                <div
                    style={{
                        padding: '0.5em',
                        backgroundColor: 'var(--color-light-gray)',
                        borderRadius: '2px',
                        marginBottom: '1em'
                    }}
                >
                    Tags
                </div>
                {tags && <Tags tags={tags}></Tags>}
            </div>
            <div className={styles.content}
                style={{ width: '40rem' }}
            >
                <div
                    style={{
                        padding: '0.5em',
                        backgroundColor: 'var(--color-light-gray)',
                        borderRadius: '2px',
                        marginBottom: '1em'
                    }}
                >
                    Last words
                </div>
                {words && <Words words={words}></Words>}
            </div>
        </div>

    );
}