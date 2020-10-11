import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

const Table = (props) => {  
    useEffect(() => {
        const {joinCode, hostName, guestName} = props.location.state;
        console.log(joinCode + "\t" + hostName + "\t" + guestName);
        const name = !!hostName ? hostName : guestName;
        console.log(name)
        const socket = io();
        socket.emit("joinSession", {id: joinCode, name});

        socket.on("showConnections", (data) => {
            const {activePlayers, host, guest} = data;
            setActivePlayers(activePlayers);
            setHost(host);
            setGuest(guest);
        });
    }, []);

    const [activePlayers, setActivePlayers] = useState(0);
    const [host, setHost] = useState("");
    const [guest, setGuest] = useState("");

    const waiting = () => <h3 className="text-4xl text-gray-600">Waiting for someone to join.</h3>
    

    return (
        <div className="container mx-auto px-4 h-auto bg-gray-300 rounded-md shadow-md space-x-8 flex items-center justify-center">
            {activePlayers < 2 ? waiting() : null}
        </div>
    );
}

export default Table;