import { useState } from 'react'
import BallAnswers from './BallAnswers';
import "./EightBall.css"

const EightBall = () => {
    const generateRandomIndex = () => Math.floor(Math.random() * BallAnswers.length);
    const startingBall = { msg: "Think of a question", color: "black" }


    const [ballMessage, setBallMessage] = useState(startingBall.msg);
    const [ballColor, setBallColor] = useState(startingBall.color);

    const shakeBall = () => {
        let randomIndex = generateRandomIndex();
        setBallColor(BallAnswers[randomIndex].color)
        setBallMessage(BallAnswers[randomIndex].msg)
    }

    const resetBall = () => {
        setBallColor(startingBall.color)
        setBallMessage(startingBall.msg)
    }

    return (
        <>
            <div className='EightBall' onClick={() => shakeBall()} style={{ backgroundColor: ballColor, color: 'white' }}>
                <p className='EightBallMsg'>{ballMessage}</p>
            </div>
            <button onClick={resetBall}>Reset</button>
        </>
    )
}

export default EightBall;