import React, {useState} from 'react';
import axios from 'axios';

const Host = (props) => {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(name);
        axios.post('/sessions/host', {hostName: name}).then((res) => {
            console.log(res.data);
            const {joinCode, hostName} = res.data
            props.history.push({pathname: `/table`, state: {joinCode, hostName}});
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="container mx-auto px-4 h-64 bg-gray-300 rounded-md shadow-md space-x-8 flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"onSubmit={handleSubmit}>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Name:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enter" />
            </form>
        </div>
    );
}

export default Host;