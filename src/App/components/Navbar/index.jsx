import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='grid grid-cols-4 gap-2'>
<div className='p-2 bg-slate-400 rounded-md'><Link to="/">Home</Link></div>
<div className='p-2 bg-slate-400 rounded-md'><Link to="/admin">Admin</Link></div>
<div className='p-2 bg-slate-400 rounded-md'><Link to="/cars">View Cars</Link></div>
<input placeholder='search'></input>



    </div>
  )
}

export default NavBar