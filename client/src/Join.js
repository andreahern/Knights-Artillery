import React, {useState} from 'react';
import axios from 'axios'

const Join = (props) => {
    const [joinCode, setJoinCode] = useState("");
    const [guestName, setGuestName] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault(); 

        axios.post('/sessions/join', {joinCode, guestName})
        .then((res) => {
            console.log(res.data);
            props.history.push({pathname: `/table`, state: {joinCode, guestName}});
        }).catch((err) => {
            console.log(err);
        });
    }
    
    return (
        <div className="container mx-auto px-4 h-auto bg-gray-300 rounded-md shadow-md space-x-8 flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4" onSubmit={handleSubmit}>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Join Code:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" value={joinCode} onChange={e => setJoinCode(e.target.value)}/>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Name:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" value={guestName} onChange={e => setGuestName(e.target.value)}/>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enter" />
            </form>
        </div>
    );
}

export default Join;