import React from "react";

const CharacterCard = props => {
    const style = {
        border: "solid 2px crimson",
        borderRadius: "1rem",
        width: "70%",
        height: "35rem",
        fontSize: "2.7vh",
        fontWeight: 700,
        textAlign: "center",
        margin: "1rem",
        color: "crimson",
        img: {
            border: "dashed 2px red",
            borderRadius: "1rem",
            width: "100%",
            height: "80%",
        }
    }
    return (
        <div className="charCard" style={style} onClick={props.handleClick} >
            <img src={props.data.source} alt="Char" style={style.img}/>
            <p>{props.data.charName}</p>
            {/* <p style={{display: "none"}}>{props.data.selected}</p> */}
        </div>
    )
}

export default CharacterCard