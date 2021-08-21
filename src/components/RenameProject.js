import React, { useContext, useState } from 'react'
import ProjectForm from './ProjectForm'
import firebase from '../firebase'
import {TodoContext} from '../context'

function RenameProject ({project, setShowModal}){
    
    //State
    const [newProjectName, setNewProjectName] = useState(project.name)

    //Context
    const { selectedProject, setSelectedProject} = useContext(TodoContext)

    //Rename Project
    const RenameProject = (project, newProjectName) => {
        const projectsRef = firebase.firestore().collection('projects')
        const todosRef = firebase.firestore().collection('todos')

        const { name : oldProjectName } = project

        projectsRef
            .where('name', '==', newProjectName)
            .get()
            .then( querySnapshot => {
                if(!querySnapshot.empty){
                    alert('Project with the same name already exists!')    
                }else{
                    projectsRef
                        .doc(project.id)
                        .update({
                            name : newProjectName
                        })
                        .then( () => {
                            todosRef
                                .where('projectName', '==', oldProjectName)
                                .get()
                                .then( querySnapshot => {
                                    querySnapshot.forEach( doc => {
                                        doc.ref.update({
                                            projectName : newProjectName
                                        })
                                    })
                                })
                                .then( () => {
                                    if(selectedProject === oldProjectName){
                                        setSelectedProject(newProjectName)
                                    }
                                })
                        })
                }
            })
    }

    function handleSubmit(e){
        e.preventDefault()

        RenameProject(project, newProjectName)

        setShowModal(false)
    }
    return (
        <div className='RenameProject'>
            <ProjectForm 
                handleSubmit={handleSubmit}
                heading='Editar nome do projeto!'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirmar'
            />
        </div>
    )
}

export default RenameProject