import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You Shoots {count} Times</p>
            <button onClick={() => setCount(count + 1)} className="btn">
                click me
            </button>
        </div>
    )
}
export default Counter;
