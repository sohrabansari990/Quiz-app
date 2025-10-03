import React, { useState } from "react";
import main from "../Gemini/Gemini_api";



const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [Question, setQuestion] = useState([]);
  const [topic, setTopic] = useState("");
  const [lock, setLock] = useState(false);
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState("Welcome");
  const [loading, setLoading] = useState("Start");

  const fetchData = async (cards) => {
    setLoading("loading...");
    if (cards.length > 0 || topic.length > 0) {
      try {
        const data = await main(topic || cards);
        const output = JSON.parse(data);
        setQuestion(output);
        setTopic("");
        setLoading("Start");
        
        setStage("Quiz");
      } catch (error) {
        console.log("error has occured", error);
      }
    }
  };

  const handleClick = (e, ans) => {
    if (lock == false) {
      if (Question[index].answer === Question[index][`option${ans}`]) {
        e.target.classList.add("Correct");
        setCount(count + 1);
        setLock(true);
      } else {
        e.target.classList.add("Wrong");
        setLock(true);
      }
    }
  };

  const nextQuestion = () => {
    if (lock == true) {
      if (index < Question.length - 1) {
        setLock(false);
        setIndex(index + 1);
      } else {
        setStage("Result");
      }
    }

    const change = document.querySelectorAll(".list");
    change.forEach((e) => {
      e.classList.remove("Correct", "Wrong");
    });
  };

  // ================================================================

  return (
    <div className="h-screen w-full flex  items-center justify-center bg-zinc-700 select-none">
      {stage === "Welcome" && (
        <div className="welcome flex px-10 justify-center   w-[50vw] h-[60vh] rounded-xl  items-center relative bg-black text-white flex-col ">
          <h1 className="font-bold text-4xl mb-5">Welcome to the quiz app!</h1>
          <hr className="mb-2  w-full " />
          <label className="text-[80%] mt-2 text-white flex justify-start w-full mb-2">
            Enter a topic and get 10 AI-generated quiz questions.
          </label>

          <input
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            id=""
            placeholder="Enter your topic here..."
            className="p-2 mb-2 rounded outline-none text-black bg-white w-full text-[1.3vw] px-[1vw]"
          ></input>

          <button
            onClick={(e) => {
              fetchData(e);
            }}
            className="bg-white px-4 py-2 w-full hover:bg-zinc-200 focus:scale-95 transition-all duration-500 ease-in-out text-black font-bold cursor-pointer mb-8 rounded mt-4"
          >
            {loading}
          </button>
          <div className="flex items-center justify-center  w-full ">
            <div className="cards text-black grid grid-cols-3 gap-6">
              <div
                onClick={() => {
                  fetchData("Computer");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                Computer <i className="ri-macbook-line"></i>
              </div>
              <div
                onClick={() => {
                  fetchData("General knowledge");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                General <i className="ri-ai-generate-2"></i>
              </div>
              <div
                onClick={() => {
                  fetchData("History");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                History <i className="ri-hourglass-fill"></i>
              </div>
              <div
                onClick={() => {
                  fetchData("Technology");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                Technology <i className="ri-lightbulb-flash-fill"></i>
              </div>
              <div
                onClick={() => {
                  fetchData("Sports");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                Sports <i className="ri-billiards-fill"></i>
              </div>
              <div
                onClick={() => {
                  fetchData("Islam");
                }}
                className="bg-white cursor-pointer hover:bg-zinc-200 hover:scale-95 min-w-[13vw] min-h-[4vw] h-[3vw] w-[10vw] py-2 rounded px-4"
              >
                Islam <i className="ri-git-repository-fill"></i>
              </div>
            </div>
          </div>

          <p className="text-[80%] text-gray-300 mt-2 absolute bottom-3">
            © 2025{" "}
            <a
              className="text-blue-800"
              target="blank"
              href="https://sohrabalefi.qzz.io/"
            >
              SohrabAlefi
            </a>{" "}
            • Version 1.0.0
          </p>
        </div>
      )}

      {/* ===================================================================================================== */}
      {stage === "Quiz" && (
        <div className="quiz flex px-10 justify-center   w-[50vw] h-[60vh] rounded-xl  items-center relative bg-black text-white flex-col ">
          <h1 className="font-bold text-2xl mb-5">Quiz App</h1>
          
           <button className="back bg-white px-3 py-1 text-black text-[1.1vw] font-medium rounded cursor-pointer hover:bg-zinc-200"
           onClick={()=>{
            setStage("Welcome")
            setIndex(0);
            setQuestion([]);
            setCount(0);
            setLock(false);
           }}>Back to Home</button>
          <hr className="mb-3" />
          <h3 className="text-[2vh]">{Question[index].question} </h3>

          <ul className="mt-4 gap-2 flex flex-col w-full">
            <li
              onClick={(e) => {
                handleClick(e, 1);
              }}
              className="list border py-2 px-3"
            >
              {Question[index].option1}
            </li>
            <li
              onClick={(e) => {
                handleClick(e, 2);
              }}
              className="list border py-2 px-3"
            >
              {Question[index].option2}
            </li>
            <li
              onClick={(e) => {
                handleClick(e, 3);
              }}
              className="list border py-2 px-3"
            >
              {Question[index].option3}
            </li>
            <li
              onClick={(e) => {
                handleClick(e, 4);
              }}
              className="list border py-2 px-3"
            >
              {Question[index].option4}
            </li>
          </ul>
          <button
            onClick={() => {
              nextQuestion();
            }}
            className="bg-white px-4 py-2 w-full hover:bg-zinc-200 hover:scale-95 transition-all duration-500 ease-in-out text-black font-bold cursor-pointer mb-8 rounded mt-4"
          >
            Submit
          </button>
          <div className="index flex justify-center mt-2 pb-4">
            {index + 0} of {Question.length} questions
          </div>
          <p className="text-[80%] text-gray-300 mt-2 absolute bottom-3">
            © 2025{" "}
            <a
              className="text-blue-800"
              target="blank"
              href="https://sohrabalefi.qzz.io/"
            >
              SohrabAlefi
            </a>{" "}
            • Version 1.0.0
          </p>
        </div>
      )}
      {/* ============================================================================================================ */}
      {stage === "Result" && (
        <div className="quiz flex px-10 justify-center   w-[50vw] h-[60vh] rounded-xl  items-center relative bg-black text-white flex-col ">
          <h1 className="font-bold text-4xl mb-4">Congrats!</h1>
          <h3 className="text-[1.5vw]">You won the quiz</h3>
          <h4>Your score is {count}</h4>
          <button
            onClick={() => {
              setIndex(0);
              setQuestion([]);
              setCount(0);
              setLock(false);
              setStage("Welcome");
            }}
            className="bg-white px-4 w-full py-2 text-black font-bold cursor-pointer mt-4"
          >
            Restart
          </button>
          <p className="text-[80%] text-gray-300 mt-2 absolute bottom-3">
            © 2025{" "}
            <a
              className="text-blue-800"
              target="blank"
              href="https://sohrabalefi.qzz.io/"
            >
              SohrabAlefi
            </a>{" "}
            • Version 1.0.0
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
