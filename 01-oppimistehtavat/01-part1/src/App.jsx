import "./App.css";
import { useState } from "react";

const App = () => {
  // Original counter
  const [counter, setCounter] = useState(0);

  // Calculator input
  const [calcInput, setCalcInput] = useState("");

  // Calculator handlers
  const handleCalcClick = (value) => {
    setCalcInput(calcInput + value);
  };

  const handleCalcClear = () => {
    setCalcInput("");
  };

  const handleCalcEvaluate = () => {
    try {
      const result = eval(calcInput);
      setCalcInput(String(result));
    } catch {
      setCalcInput("Error");
    }
  };

  return (
    <div>
      {/* Counter */}
      <div className="button">
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>1</button>
        <button onClick={() => setCounter(0)}>C</button>
      </div>

      <hr />

      {/* Calculator */}
      <div className="calculator">
        <div className="display">{calcInput || "0"}</div>
        <div className="buttons">
          <button onClick={() => handleCalcClick("1")}>1</button>
          <button onClick={() => handleCalcClick("2")}>2</button>
          <button onClick={() => handleCalcClick("3")}>3</button>
          <button onClick={() => handleCalcClick("+")}>+</button>
          <br />
          <button onClick={() => handleCalcClick("4")}>4</button>
          <button onClick={() => handleCalcClick("5")}>5</button>
          <button onClick={() => handleCalcClick("6")}>6</button>
          <button onClick={() => handleCalcClick("-")}>-</button>
          <br />
          <button onClick={() => handleCalcClick("7")}>7</button>
          <button onClick={() => handleCalcClick("8")}>8</button>
          <button onClick={() => handleCalcClick("9")}>9</button>
          <button onClick={() => handleCalcClick("*")}>*</button>
          <br />
          <button onClick={() => handleCalcClick("0")}>0</button>
          <button onClick={() => handleCalcClick(".")}>.</button>
          <button onClick={handleCalcClear}>C</button>
          <button onClick={() => handleCalcClick("/")}>/</button>
          <br />
          <button className="equal" onClick={handleCalcEvaluate}>
            =
          </button>
          <button
            className="back"
            onClick={() => setCalcInput(calcInput.slice(0, -1))}
          >
            ←
          </button>
          <br />
          <h1>Extra controls</h1>
          <button classname="func" onClick={() => handleCalcClick("(")}>
            (
          </button>
          <button classname="func" onClick={() => handleCalcClick(")")}>
            )
          </button>
          <button classname="func" onClick={() => handleCalcClick("%")}>
            %
          </button>
          <button classname="func" onClick={() => handleCalcClick("**")}>
            ^
          </button>
          <button classname="func" onClick={() => handleCalcClick("Squared")}>
            √
          </button>
          <button classname="func" onClick={() => handleCalcClick("log")}>
            log
          </button>
          <button classname="func" onClick={() => handleCalcClick("sin")}>
            sin
          </button>
          <button classname="func" onClick={() => handleCalcClick("cos")}>
            cos
          </button>
          <button classname="func" onClick={() => handleCalcClick("tan")}>
            tan
          </button>
          <button classname="func" onClick={() => handleCalcClick("PI")}>
            π
          </button>
          <button classname="func" onClick={() => handleCalcClick("E")}>
            e
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
