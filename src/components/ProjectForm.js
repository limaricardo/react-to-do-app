import React from 'react'

function Projectform({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}) {

    return (
        <form onSubmit={handleSubmit} className='ProjectForm'>
            <h3>{heading}</h3>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='Nome do Projeto'
                autoFocus
            />
            <button className='cancel' role='button' onClick={() => setShowModal(false)}>
                Cancelar
            </button>
            <button className="confirm">
                {confirmButtonText}
            </button>
        </form>
    )
}

export default Projectform