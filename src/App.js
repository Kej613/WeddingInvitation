import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './component/Header';
import './component/main.css';

function App() {
   const [board, setBoard] = useState([]);

    useEffect(() => {
        axios.get('/api/Boards')
            .then(response => setBoard(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header/>
            <div className="wrap">
                <div className="main">
                    <h2 className= "date"> 방명록 </h2>
                       <ul>
                            {board.map(board => (
                                  <li key={board.id}
                                      className="boarder-item"
                                      style={{ backgroundColor: board.id % 2 === 0 ? '#FFF0F0' : '#FFF0F0',
                                               borderRadius: '10px',
                                               padding: '20px',
                                               margin: '5px'}} >
                                  {board.content} </li>
                            ))}
                       </ul>
                  </div>
             </div>
        </div>
    );
}

export default App;