import { useState } from "react";

function Toggle() {
    const [isVisible, setIsVisible] = useState(false)
    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
            {isVisible && <p>Hello Sravan react is awesome!</p>}
        </div>
    )
}
export default Toggle