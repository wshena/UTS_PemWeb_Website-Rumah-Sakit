import React from 'react'
import { Outlet } from 'react-router-dom'
import hospitalLogo from '../../assets/images/pngwing.com.png'

export default function NavbarComponent() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor: '#E8F0FE'}}>
  			<div className="container p-3">
    			<a className="navbar-brand" href='/home'> <img src={hospitalLogo} widht='80' height='80'></img> </a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item"> <a className="nav-link active" aria-current="page" href='/home'>Home</a> </li>
							<li className='nav-item'> <a className='nav-link' href='/about'>About</a> </li>
							<li className='nav-item'> <a className='nav-link' href='/findDoctor'>Find a Doctor</a> </li>
							<li className='nav-item'> <a className='nav-link' href='/coe'>Center Of Exellence</a> </li>
							<li className='nav-item'> <a className='nav-link' href='/book'>Book Apointment</a> </li> 
						</ul>
					</div>
  			</div>
			</nav>

			<Outlet />
		</>
	)
}