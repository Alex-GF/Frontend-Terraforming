import "../static/css/board.css";
import {useRef, useEffect} from "react";

const Board = () => {

    let space = useRef();
    let phobos = useRef();
    let ganimedes = useRef();

    useEffect(() => {

        space.current.addEventListener("mousemove", (movement) => { 
            space.current.style.backgroundPositionX = -movement.screenX/15 + "px";
            space.current.style.backgroundPositionY = -movement.screenY/15 + "px";
            
            phobos.current.style.backgroundPositionX = movement.screenX/5 + "px";
            phobos.current.style.backgroundPositionY = movement.screenY/20 + "px";
    
            ganimedes.current.style.backgroundPositionX = movement.screenX/10 + "px";
            ganimedes.current.style.backgroundPositionY = movement.screenY/20 + "px"; 
        });

    }, []);

    return (

            <div className="space" id="background" ref={space}>
                <div className="phobos" id="phobos" ref={phobos}>
                    <div className="mars" id="mars"></div>
                </div>
                <div className="ganimedes" id="ganimedes" ref={ganimedes}></div>
            </div>

    );

}

export default Board;