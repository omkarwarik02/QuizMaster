
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen';
import { useState } from 'react'
function App() {
const [screen, setScreen] = useState("home");
  return (
    <div>
      {screen === "home" && <HomeScreen title="Welcome to QuizMaster! 🧠" author="Omkar" subtitle="Test your knowledge with fun quizzes" onStart={() => setScreen("quiz")} />}
        {screen === "quiz" && <QuizScreen/>}

    </div>
  )
}

export default App