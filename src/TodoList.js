import React, { useState }  from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);



  const handleTextChange = e => {
    setInput(e.target.value)
  }

  const handleListChange = e => {
    if (e.keyCode === 13) {
      setList([...list, e.target.value])
      setInput('')
    }
  }
  const handleDelChange = index => {
    setList(list.slice(index,1))
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleTextChange}
        onKeyUp={handleListChange}
      />
      <ul>
        {list.map((value, index) =>
          <li key={index}
              onClick={handleDelChange}
          >{value}</li>
        )}
      </ul>
    </>
  );
}

export default TodoList;