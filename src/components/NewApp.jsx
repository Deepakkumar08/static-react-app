// import React, { useEffect, useState } from "react";

// const NewApp = () => {
//   const [input, setInput] = useState(""); // Renamed 'Inuput' to 'input'
//   const [resData, setResData] = useState({});

//   // Function to fetch data
//   useEffect(() => {
//     // Define an async function inside useEffect
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dogapi.dog/api/v2/breeds");
//         const data = await response.json(); // Parsing JSON data
//         setResData(data); // Update state with the fetched data
//       } catch (error) {
//         console.error("Error fetching data:", error); // Error handling
//       }
//     };

//     fetchData(); // Call the async function to fetch data
//   }, []);

//   console.log(resData); // This will log the fetched data object

//   return (
//     <>
//       <h1>Hi, This is Deepak: {input}</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => {
//           setInput(e.target.value); // Update input state on change
//         }}
//       />
//       <pre>{JSON.stringify(resData, null, 2)}</pre> {/* Display the fetched data */}
//     </>
//   );
// };

// export default NewApp;
