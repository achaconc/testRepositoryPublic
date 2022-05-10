interface IWord {
    word: string,
    tags: string[]
}

interface IProps {
    input: string,
    setTags: React.Dispatch<React.SetStateAction<[string, number][] | undefined>>,
    setWords: React.Dispatch<React.SetStateAction<string[] | undefined>>
}

export const fecthWordsTagger = (props: IProps): void => {
    fetch(`http://localhost:1994/api/word-tagger`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: props.input
        }),
    })
        .then(res => res.json())
        .then((response) => {
            if (response.words) {
                let wordList: string[] = [];
                let tagList: { [index: string]: number } = {};
                response.words.forEach((resp: IWord) => {
                    wordList = [...wordList, resp.word];
                    resp.tags.forEach((tag: string) => {
                        tagList[tag] = tagList[tag] ? tagList[tag] + 1 : 1;
                    });
                });
                props.setTags(Object.entries(tagList));
                props.setWords(wordList);
            }
            else {
                console.log("Error");
            }
        })
        .catch(err => {
            console.log("Error Reading data " + err);
        });
}