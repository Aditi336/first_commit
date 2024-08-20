import React, { useState } from 'react';

function App() {
  // Define state to hold an array of input contents
  const [inputContents, setInputContents] = useState([]);
  // Define state to hold an array of input elements
  const [inputElements, setInputElements] = useState([]);

  // Function to add new input content and element
  const handleAddContent = (pContent) => {
    setInputContents([...inputContents, pContent]);
    setInputElements([...inputElements, pContent]);
  };

  // Function to delete input content and element
  const handleDeleteContent = (index) => {
    setInputContents(inputContents.filter((_, i) => i !== index));
    setInputElements(inputElements.filter((_, i) => i !== index));
  };

  // Function to print input contents to console
  const printInputContents = () => {
    console.log(inputContents);
  };

  return (
    <div>
      {/* Input fields */}
      {inputElements.map((content, index) => (
        <div key={index}>
          <input type="text" value={content} readOnly />
          <button onClick={() => handleDeleteContent(index)}>Delete</button>
        </div>
      ))}

      {/* Example paragraphs */}
      <p onClick={() => handleAddContent("Text content of first paragraph")}>Click me to add content to input 1!</p>
      <p onClick={() => handleAddContent("Text content of second paragraph")}>Click me to add content to input 2!</p>
      {/* Add more <p> tags as needed */}

      {/* Button to print input contents to console */}
      <button onClick={printInputContents}>Print Input Contents</button>
    </div>
  );
}

export default App;
