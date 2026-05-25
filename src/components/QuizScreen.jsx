import { useState, useEffect } from "react"
const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury"
    }
]

function QuizScreen() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)
    const [timeLeft, setTimeLeft] = useState(10)

    const current = questions[currentQuestion]
 useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(prev => {
            if(prev <= 1){
                clearInterval(timer)
                haddleNext()
                return 0
            }
            return prev - 1; 
        })
    }, 1000)

    return () => {
        clearInterval(timer)
        setTimeLeft(10)
    }
}, [currentQuestion])

    function haddleNext() {
    
        if(selected === current.answer){
            setScore(score + 1)
        }
        setSelected(null)
        
        if(currentQuestion + 1 === questions.length){
             setFinished(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }
   return (
    <div>
        {finished ? (
            <div>
                <h1>Quiz Finished! 🎉</h1>
                <p>Your Score: {score} / {questions.length}</p>
                <button onClick={() => {
                    setCurrentQuestion(0)
                    setScore(0)
                    setSelected(null)
                    setFinished(false)
                }}>Play Again 🔄</button>
            </div>
        ) : (
            <div>
                <h2>{current.question}</h2>
                <p>⏱️ Time Left: {timeLeft}s</p>
                <div>
                    {current.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(option)}
                            style={{
                                background: selected === option ? "blue" : "grey",
                                color: selected === option ? "white" : "black"
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {selected && (
                    <button onClick={haddleNext}>Next Question ➡️</button>
                )}
            </div>
        )}
    </div>
)



















}
export default QuizScreen