import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ptBR } from "date-fns/locale";


function TodoForm ({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    todoProject, setTodoProject,
    projects,
    showButtons = false,
    setShowModal = false
}){
    return (
        <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                    <input 
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='Tarefa...'
                        autoFocus
                    />
                </div>
                <div className="remind">
                    <Bell />
                    <p>Lembre-me</p>
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay />
                        <p>Escolha um dia</p>
                    </div>
                    <DatePicker 
                        value={day}
                        onChange={day => setDay(day)}
                    />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock />
                        <p>Escolha um horário</p>
                    </div>
                    <TimePicker 
                        value={time}
                        onChange={time => setTime(time)}
                    />
                </div>
                <div className="pick-project">
                    <div className="title">
                        <Palette />
                        <p>Escolha um projeto</p>
                    </div>
                    <div className="projects">
                        {
                           projects.length > 0 ?
                           projects.map( project =>
                            <div 
                                className={`project ${todoProject === project.name ? "active" : ""}`} 
                                onClick={() => setTodoProject(project.name)}
                                key={project.id}
                            >
                                {project.name}
                            </div>    
                        )
                        :
                        <div style={{color:'orange'}}>
                            Por favor, adicione um projeto antes de continuar.
                        </div>

                        }
                    </div>
                </div>
                {
                    showButtons && 
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40'/>
                        </div>
                        <div className="confirm">
                            <button>+ Adicione uma nova tarefa</button>
                        </div>
                    </div>
                }
            </form>
        </MuiPickersUtilsProvider>
    )
}

export default TodoForm