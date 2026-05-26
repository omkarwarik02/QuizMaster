import { useState, useEffect, useContext } from "react"
import { CategoryContext } from "../context/CategoryContext"
const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi",
        category: "Geography"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        category: "Math"
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury",
        category: "Science"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: "Paris",
        category: "Geography"
    },
    {
        question: "What is 5 x 5?",
        options: ["20", "25", "30", "35"],
        answer: "25",
        category: "Math"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O",
        category: "Science"
    }
]

function QuizScreen() {

    const {category} = useContext(CategoryContext)

    const filteredQuestion = category === "All" ? questions : questions.filter(q => q.category === category)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)
    const [timeLeft, setTimeLeft] = useState(10)

    const current = filteredQuestion[currentQuestion]



  function haddleNext() {
    
        if(selected === current.answer){
            setScore(score + 1)
        }
        setSelected(null)
        
        if(currentQuestion + 1 === filteredQuestion.length){
             setFinished(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }





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

  
return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
        {finished ? (
            <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md w-full">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">Quiz Finished! 🎉</h1>
                <p className="text-2xl text-gray-600 mb-8">Your Score: <span className="font-bold text-purple-600">{score} / {filteredQuestion.length}</span></p>
                <button
                    onClick={() => {
                        setCurrentQuestion(0)
                        setScore(0)
                        setSelected(null)
                        setFinished(false)
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg transition-all"
                >
                    Play Again 🔄
                </button>
            </div>
        ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-400 font-medium">Question {currentQuestion + 1} / {filteredQuestion.length}</span>
                    <span className={`font-bold text-lg ${timeLeft <= 3 ? "text-red-500" : "text-purple-600"}`}>⏱️ {timeLeft}s</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{current.question}</h2>
                <div className="flex flex-col gap-3">
                    {current.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(option)}
                            className={`py-3 px-5 rounded-xl text-left font-medium transition-all border-2 ${selected === option ? "bg-purple-600 text-white border-purple-600" : "bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-400"}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {selected && (
                    <button
                        onClick={haddleNext}
                        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-full text-lg transition-all"
                    >
                        Next Question ➡️
                    </button>
                )}
            </div>
        )}
    </div>
)

















}
export default QuizScreen