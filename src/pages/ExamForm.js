import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
    Typography,
    FormGroup,
    FormLabel,
    Button
} from '../../node_modules/@material-ui/core';
import clsx from 'clsx';
import Text from '../component/Text';
import Check from "../component/Check";
import RadioSelect from "../component/RadioSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    paper: {
        width: "auto",
        minWidth: '90px',
        padding: '15px',
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
        flexWrap: "wrap",
        overFlow: 'hidden'
    },
    normalBorder: {
        border: "2px solid rebeccapurple"
    },
    dangerBorder: {
        border: "2px solid red"
    },
    danger: {
        color: "red"
    },
    formStyle: {
        margin: "20px"
    }
}));

const questions = [
    {
        id: 1,
        data: [
            {
                id: "q1",
                title: "Which one of the followings is a programming language?",
                type: "radio", // allowed values radio, checkbox, text
                options: ["HTTP", "HTML", "HPML", "FTP"],
                answer: "HTML",
                mark: 5
            },
            {
                id: "q2",
                title: "Which one of the followings are search engine?",
                type: "checkbox", // allowed values radio, checkbox, text
                options: ["Yahoo", "Google", "Chrome", "Tor"],
                answer: ["Yahoo", "Google", "Tor"],
                mark: 10
            },
            {
                id: "q3",
                title: "Write any one browser name that you know",
                type: "text", // allowed values radio, checkbox, text
                answer: ["Chrome", "Firefox", "safari", "opera"],
                mark: 10
            },
        ]
    },
    {
        id: 2,
        data: [
            {
                id: "q1",
                title: "Which one of the followings is a programming language22222222222222?",
                type: "radio", // allowed values radio, checkbox, text
                options: ["HTTP", "HTML", "HPML", "FTP"],
                answer: "HTML",
                mark: 5
            },
            {
                id: "q2",
                title: "Which one of the followings are search engine22222222222222222?",
                type: "checkbox", // allowed values radio, checkbox, text
                options: ["Yahoo", "Google", "Chrome", "Tor"],
                answer: ["Yahoo", "Google", "Tor"],
                mark: 10
            },
            {
                id: "q3",
                title: "Write any one browser name that you know2222222222222?",
                type: "text", // allowed values radio, checkbox, text
                answer: ["Chrome", "Firefox", "safari", "opera"],
                mark: 10
            },
        ]
    },
    {
        id: 3,
        data: [
            {
                id: "q1",
                title: "Which one of the followings is a programming language33333333333?",
                type: "radio", // allowed values radio, checkbox, text
                options: ["HTTP", "HTML", "HPML", "FTP"],
                answer: "HTML",
                mark: 5
            },
            {
                id: "q2",
                title: "Which one of the followings are search engine33333333333?",
                type: "checkbox", // allowed values radio, checkbox, text
                options: ["Yahoo", "Google", "Chrome", "Tor"],
                answer: ["Yahoo", "Google", "Tor"],
                mark: 10
            },
            {
                id: "q3",
                title: "Write any one browser name that you know33333333333333?",
                type: "text", // allowed values radio, checkbox, text
                answer: ["Chrome", "Firefox", "safari", "opera"],
                mark: 10
            },
        ]
    },
    {
        id: 4,
        data: [
            {
                id: "q1",
                title: "Which one of the followings is not a programming language44444?",
                type: "radio", // allowed values radio, checkbox, text
                options: ["JS", "C++", "HPML", "C"],
                answer: "HPML",
                mark: 10
            },
            {
                id: "q2",
                title: "Which one of the followings not are search engine4444444444?",
                type: "checkbox", // allowed values radio, checkbox, text
                options: ["Yahoo", "Google", "Chrome", "Tor"],
                answer: ["Chrome"],
                mark: 10
            },
            {
                id: "q3",
                title: "Write any one browser name that you don't know444444444444444?",
                type: "text", // allowed values radio, checkbox, text
                answer: ["Chrome", "Firefox", "safari", "opera"],
                mark: 10
            },
        ]
    }
]

const QuestionPaper = ({ counter, handleSubmit, data, classes, answer1, answer2, answer3, handleChange1, handleChange2, handleChange3 }) => {
    return (
        <div>
            {
                data && data.map((ele) => {
                    return (ele.type === "text" ? (<div className={classes.formStyle}>
                        <Text name="text" title={ele.title} value={answer1.text} handleChange={handleChange1} />
                    </div>) : ele.type === "checkbox" ? (<div className={classes.formStyle}>
                        <FormLabel style={{ margin: '5px' }} component="legend">{ele.title}</FormLabel>
                        <FormGroup style={{ flexDirection: 'row' }}>
                            {
                                ele && ele.options.map((ele) => {
                                    return <Check name={ele} value={answer2[`${ele}`]} handleChange={handleChange2} />
                                })
                            }
                        </FormGroup>
                    </div>) : ele.type === "radio" ? (<div className={classes.formStyle}>
                        <RadioSelect name="radio" title={ele.title} dataSet={ele.options} value={answer3.radio} handleChange={handleChange3} />
                    </div>) : null)
                })
            }
            <div className={classes.formStyle}>
                <Button disabled={counter === 0} type="submit" variant="contained" onClick={(e) => { handleSubmit(e) }} color="primary">Submit</Button>
            </div>
        </div>
    )
};


function ExamForm(props) {
    const classes = useStyles();

    const [questionData, setQuestionData] = useState(questions);
    const [finalResult, setFinalResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [counter, setCounter] = useState((props.location && props.location.state && props.location.state.time) || 0);
    const [answer1, setAnswer1] = useState({
        text: ""
    });
    const [answer2, setAnswer2] = useState({});
    const [answer3, setAnswer3] = useState({
        radio: ""
    });

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setAnswer1({ ...answer1, [name]: value });
    };

    const handleChange2 = (e) => {
        const { name, checked } = e.target;
        setAnswer2({ ...answer2, [name]: checked });
    };

    const handleChange3 = (e) => {
        const { name, value } = e.target;
        setAnswer3({ ...answer3, [name]: value });
    };

    const handleSubmit = () => {
        setIsLoading(true)
        let markResult = 0;
        let cbAnswer = [];
        for (const key in answer2) {
            if (answer2[key]) {
                cbAnswer.push(key)
            }
        }
        const finalAnswer = {
            "q1": answer3,
            "q2": cbAnswer,
            "q3": answer1,
        };
        const textResult = questionData[2].answer.includes(finalAnswer.q3.text);
        const cbResult = questionData[1].answer.length === finalAnswer.q2.length && questionData[1].answer.every(function (value, index) { return value === finalAnswer.q2[index] });
        if (finalAnswer.q1.radio === questionData[0].answer) {
            markResult += questionData[0].mark
        }
        if (cbResult) {
            markResult += questionData[1].mark;
        }
        if (textResult) {
            markResult += questionData[2].mark
        }
        setFinalResult(markResult);
    };

    const backToHome = () => {
        props.history.push("/");
    };

    const reloadPage = () => {
        window.location.reload();
    };

    useEffect(() => {
        let timer;
        if (!isLoading) {
            timer = counter > 0 && setInterval(() => {
                setCounter(counter - 1)
            }, 1000);
        }
        if (counter <= 0) {
            handleSubmit()
        }
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        async function setQuestion() {
            const findQuestion = await questions.find((ele) => ele.id === +props.match.params.id);
            if (findQuestion) {
                await setQuestionData(findQuestion.data)
            }
        }
        setQuestion();
    }, [])
    useEffect(() => {
        let a = {};
        async function setData() {
            const cb = await questionData && questionData.filter((ele) => ele.type === "checkbox");
            await (cb.length !== 0) && cb[0].options.map((ele) => {
                a[ele] = false
            });
            setAnswer2(a);
        };
        setData();

        return () => {
            setIsLoading(false);
            setFinalResult(0);
            setAnswer1({ text: "" })
            setAnswer2({});
            setAnswer3({ radio: "" });
        }
    }, []);

    const borderSelector = () => {
        return counter <= 15 ? classes.dangerBorder : classes.normalBorder;
    };

    const titleCreator = () => {
        const urlStr = props.match.url.split("/");
        return urlStr[1].toUpperCase() + "-" + urlStr[2];
    }

    return (
        <div className={classes.root}>
            <Typography variant="h4">{titleCreator()}</Typography>
            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <Paper className={clsx(classes.paper, borderSelector())} elevation={3} >
                    <Typography variant="h3"> <span className={counter <= 15 ? classes.danger : "undefined"}>{counter}</span> </Typography>
                </Paper>
                {
                    isLoading && <Paper className={clsx(classes.paper, borderSelector())} elevation={3} >
                        <Typography variant="h3">Result - {finalResult}</Typography>
                    </Paper>
                }
                <div>
                    <Button variant="contained" onClick={backToHome} style={{ marginRight: '5px' }} color="primary">Back To Home </Button>
                    {isLoading && <Button variant="contained" onClick={reloadPage} color="secondary">Reload </Button>}
                </div>
            </div>
            <Paper className={classes.paper} style={{ minWidth: '600px' }} elevation={3} >
                <QuestionPaper
                    data={questionData}
                    classes={classes}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    handleChange1={handleChange1}
                    handleChange2={handleChange2}
                    handleChange3={handleChange3}
                    handleSubmit={handleSubmit}
                    counter={counter}
                />
            </Paper>
        </div >
    )
}

export default withRouter(ExamForm);
