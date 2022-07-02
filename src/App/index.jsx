import React from 'react'
import Navbar from '../components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom';
import { navbar } from "../utils/navbar.js"


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="/login" element= {<Navigate to='/home'/>}/>
			<Route element={<Navbar />}>
				 {navbar.map(({ id, path, element }) => {
					return <Route key={id} path={path} element={element} />;
				})}
			</Route>
    </Routes>
  )
}

export default Root