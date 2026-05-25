


function HomeScreen (props) {


    return(
     <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md w-full">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">{props.title}</h1>
            <p className="text-gray-500 text-lg mb-2">{props.subtitle}</p>
            <p className="text-gray-400 mb-8">Made by {props.author}</p>
            <button onClick={props.onStart} className="bg-purple-600 hover:bg-amber-400 text-white font-bold px-8 py-3 rounded-full text-lg transition-all"> Let's Play! 🎮</button>
        </div>

     </div>
    )
}

export default HomeScreen