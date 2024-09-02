import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //useref hook
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.focus();
    passwordRef.current?.window.navigator.clipboard.writeText(Password);
  }, [Password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+-/=?^_`{0,61}~\\";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div
      className="flex flex-col justify-center min-h-screen items-center "
      style={{
        backgroundColor: "#DFDBE5",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239294ac' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <h1 className="text-black font-bold text-4xl text-center">
        Password Generator
      </h1>

      <div className="pt-8 w-full max-w-md mx-auto bottom-12 shadow-md rounded-lg px-4 my-8 text-orange-500 font-medium bg-gray-700 ">
        <div className="flex shadow rounded-lg overflow-hidden ">
          <input
            type="text"
            value={Password}
            className="outline-non text- rounded-lg  w-full py-1 px-3"
            placeholder="Password "
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
        {/*  */}
        <div className="flex mt-4 text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={50}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label> Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Symbols </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={passwordGenerator}
            className=" mt-4 mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Generate New Password
          </button>
        </div>
      </div>
      <Link
        to="/Second"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Want to generate from Your Desired Characters.
      </Link>
    </div>
  );
}

export default Home;
