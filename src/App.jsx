import React, { useState } from "react";

const App = () => {
  const [size, setsize] = useState("");
 
  const [uppercase, setuppercase] = useState([
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  );

  
  
  const [lowercase, setLowercase] = useState([
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
   
    
  const [symbol, setsymbol] = useState(["!", "@", "#", "$", "%", "&", "*"]);
  
  
  const [num, setnum] = useState([0 ,1, 2, 3, 4, 5, 6, 7, 8, 9]);
 
  


  const [numcheck, setnumcheck] = useState(false)
  const [symbolcheck, setsymbolcheck] = useState(false)
  const [lowercheck, setlowercheck] = useState(false)
  const [uppercheck, setuppercheck] = useState(false)




  const inputsize = (e) => {
    setsize(e.target.value);
  };
 const [ans, setans] = useState("")

  const generatepass = () => {
    let charset = ""
    let finalpass = ""
 
     if((numcheck || symbolcheck || lowercheck || uppercheck ) &&  size > 0  ){
        
      
      if(numcheck) charset+=num+","
      if(symbolcheck) charset+=symbol+","
      if(lowercheck) charset+=lowercase+","
      if(uppercheck) charset+=uppercase+","

      var si=0;

     
      while(si!=size){
 let randomIndex = Math.floor(Math.random() * charset.length);
let randomChar = charset[randomIndex];

if (randomChar === ",") {
  continue;
} else {
  finalpass+=randomChar
  si++;
    
}
  
      }
   
       setans(finalpass)


     }
     else{
       alert("please selec one check box.... or please give input size....")
      
     }
  };


  

  return (
    <div className="w-screen h-screen bg-[#B37A4C] flex items-center justify-center p-4">
      <div className="h-auto w-[90%] sm:w-[50%] md:w-[30%] bg-[#FFFDDD] shadow-lg rounded-xl p-6">
        <h1 className="bg-red-300 text-center text-2xl font-semibold py-3 rounded-t-xl shadow-md">
          Password Generator
        </h1>

        <div className="showpass w-full mt-4 py-2 px-3 h-10 bg-blue-300 text-lg font-medium rounded-md shadow-inner flex items-center justify-between">
          {ans}
        </div>

        <div className="flex items-center justify-between px-2 py-2 mt-4 bg-red-200 rounded-lg shadow-sm">
          <p className="font-medium">Password length</p>
          <input
            value={size}
            min={0}
            max={20}
            required
            onChange={(e) => inputsize(e)}
            type="number"
            placeholder="number"
            className="border-2 border-gray-400 outline-none w-[40%] px-2 py-1 rounded-md text-center focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            <h1 className="font-medium">Add uppercase</h1>
            <input type="checkbox" className="w-5 h-5" checked={uppercheck} onChange={()=>setuppercheck(!uppercheck)} />
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            <h1 className="font-medium">Add lowercase</h1>
            <input type="checkbox" className="w-5 h-5" checked={lowercheck} onChange={()=>setlowercheck(!lowercheck)} />
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            <h1 className="font-medium">Add symbols</h1>
            <input type="checkbox" className="w-5 h-5" checked={symbolcheck} onChange={()=>setsymbolcheck(!symbolcheck)} />
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            <h1 className="font-medium">Add numbers</h1>
            <input type="checkbox" className="w-5 h-5"  checked={numcheck} onChange={()=>setnumcheck(!numcheck)} />
          </div>
        </div>

        <button
          onClick={() => generatepass() }
          className="w-full px-4 py-2 mt-6 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default App;