import hospitalLogo from '../../assets/images/pngwing.com.png'

export default function FooterComponent() {
	return (
		<>
			<div className="container-fluid" style={{backgroundColor: '#1D3557', color: 'white'}}>
				<div className="container d-flex align-items-center justify-content-between pt-5 pb-5">
					<a className="" href='/'> <img src={hospitalLogo} widht='80' height='80'></img> </a>
						<ul style={{listStyle: 'none'}} className='d-flex'>
							<li> <a className="text-decoration-none" aria-current="page" href='/' style={linkStyle}>Home</a> </li>
							<li> <a className='text-decoration-none' href='/about' style={linkStyle}>About</a> </li>
							<li> <a className='text-decoration-none' href='/findDoctor' style={linkStyle}>Find a Doctor</a> </li>
							<li> <a className='text-decoration-none' href='/coe' style={linkStyle}>Center Of Exellence</a> </li>
							<li> <a className='text-decoration-none' href='/book' style={{color: 'white'}}>Book Apointment</a> </li> 
						</ul>
				</div>
			</div>
		</>
	)
}

const linkStyle = {
	color: 'white',
	marginRight: '2em'
}