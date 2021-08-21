import React from 'react'

function Main ({children}){

    return (
        <div className='Main'>
            <div className="wrap">
                {children}
            </div>
        </div>
    )
}

export default Main