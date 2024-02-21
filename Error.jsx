import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const err=useRouteError()
  return (
    <>
    <h1>heyy u done some mistake please check it out in your console</h1>

    <h1>{err.status}:{err.statusText}</h1>
    <h1>{err.data}</h1>
    </>
  )
}

export default Error