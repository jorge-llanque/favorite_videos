import React from 'react'

export default function Player() {
    return (
        <div className="Player">
            <video controls autoPlay >
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-black">
                <button type="button" >
                    Regresar
                </button>
            </div>
        </div>
    )
}
