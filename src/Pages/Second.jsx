import { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

function Second() {
  const [lettersInput, setLettersInput] = useState("");
  const [numbersInput, setNumbersInput] = useState("");
  const [symbolsInput, setSymbolsInput] = useState("");
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(Password);
    }
  }, [Password]);

  const passwordGenerator = useCallback(() => {
    let availableChars = lettersInput + numbersInput + symbolsInput;
    if (availableChars.length === 0) {
      setPassword("");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += availableChars.charAt(
        Math.floor(Math.random() * availableChars.length)
      );
    }

    setPassword(pass);
  }, [lettersInput, numbersInput, symbolsInput, length]);

  return (
    <div
      className="flex flex-col justify-center min-h-screen items-center"
      style={{
        backgroundColor: "#DFDBE5",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239294ac' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <h1 className="text-black font-bold text-4xl text-center">
        Password Generator
      </h1>

      <div className="pt-8 w-full max-w-md mx-auto bottom-12 shadow-md rounded-lg px-4 my-8 font-medium text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={Password}
            className="outline-none rounded-lg w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded-lg ml-2 hover:bg-blue-800"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col mt-4 mb-4 text-sm gap-y-2">
          {/* <div className="flex items-center gap-x-2 "> */}
          <label>Letters: </label>
          <input
            type="text"
            value={lettersInput}
            onChange={(e) => setLettersInput(e.target.value)}
            className="outline-none text-center w-full rounded-sm"
            placeholder="Enter letters"
          />
          <label>Numbers: </label>
          <input
            type="text"
            value={numbersInput}
            onChange={(e) => setNumbersInput(e.target.value)}
            className="outline-none text-center w-full rounded-sm"
            placeholder="Enter numbers"
          />
          <label>Symbols: </label>
          <input
            type="text"
            value={symbolsInput}
            onChange={(e) => setSymbolsInput(e.target.value)}
            className="outline-none text-center w-full rounded-sm"
            placeholder="Enter symbols"
          />
          <label>Length: {length}</label>
          <input
            type="range"
            value={length}
            min={8}
            max={50}
            className="outline-non text- rounded-lg  w-full py-1 px-3"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={passwordGenerator}
            className="mt-4 mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Generate New Password
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Second;
