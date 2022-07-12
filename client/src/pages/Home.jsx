import React from 'react'
import AddClientModal from '../components/AddClientModal'
import Projects from '../components/Projects'
import AddProjectModal from '../components/AddProjectModal'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <>
      <div className='d-flex w-100 gap-3 mb-4'>
        <AddProjectModal/>
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}

export default Home