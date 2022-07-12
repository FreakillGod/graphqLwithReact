import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_SINGLE_PROJECT } from '../queries/projectQueries'
import { useEffect } from 'react'
import ClientInfo from "../components/ClientInfo"
import DeleteProjectButton from '../components/DeleteProjectButton'
import EditProjectFrom from '../components/EditProjectForm'

const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT, {
    variables: { id }
  })
  useEffect(() => {
    console.log('data', data)
  }, [data])

  if (loading) return <Spinner />
  if (error) return <h1>LOL ERROR</h1>

  return (
    <>
      {loading ? <h1>Loading...</h1> : (

        <div className='max-auto w-75 card p-5'>
          <Link to="/" className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className='mt-3'>{data.project.description}</h5>
          <p className='lead'>{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <DeleteProjectButton projectId={id} />
          <EditProjectFrom project={data.project} />
        </div>
      )}
    </>
  )
}

export default Project