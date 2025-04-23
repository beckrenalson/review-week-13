import React, { useState, useEffect } from 'react';

function Message({ goal, totalFruits }) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (totalFruits == 0) {
            setMessage("Let's start eating healthy!");
        }
        else if (totalFruits == goal) {
            setMessage("🎉 Congratulations! You reached your goal!")
        } else if (totalFruits < goal) {
            setMessage(`Keep going! ${goal - totalFruits} to go!`)
        }
    }, [totalFruits, goal])

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Daily Goal: {goal}</h2>
            <p>Progress: {totalFruits}</p>
            <p><strong>{message}</strong></p>
        </div>
    );
}

export default Message