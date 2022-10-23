import facebook from '../../assets/icons/facebook-round-icon.png'
import twitter from '../../assets/icons/twitter-round-icon.png'
import instagram from '../../assets/icons/instagram-round-icon.png'

import doctor1 from '../../assets/images/pexels-antoni-shkraba-6749773.jpg'
import doctor2 from '../../assets/images/pexels-thirdman-5327580.jpg'
import doctor3 from '../../assets/images/pexels-thirdman-5327585.jpg'
import doctor4 from '../../assets/images/pexels-pavel-danilyuk-5998468.jpg'

export default function FindDoctorComponent() {
	return (
		<>
			<div className="container-fluid" style={{backgroundColor: '#283C43'}}>
				<div className="container pt-5 pb-5">
					<div className="row d-flex align-items-center justify-content-center mb-5">
						<div className="col-lg-6 col-md-12 text-center">
							<p className="m-auto" style={{color: 'white', borderBottom: '3px solid white', width: '150px'}}>FIND A DOCTOR</p>
							<h1 className="display-5" style={{
								fontWeight: 'bold',
								color: '#89B8CD',
								marginTop: '20px',
								marginBottom: '20px'
							}}>Find Our Health Care Professionals</h1>
							<p style={{
								color: 'white'
							}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Vitae tempus quam pellentesque nec nam aliquam sem. Mauris vitae ultricies leo integer.</p>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-evenly mb-4">
						<div className="card p-0" style={{maxWidth: '480px'}}>
							<div className="row g-0">
								<div class="col-lg-4 col-md-12">
      						<img src={doctor1} class=" card-fluid rounded-start" alt="doctor1" width='100%' height='100%'/>
    						</div>
    						<div class="col-lg-8 col-md-12">
      						<div class="card-body">
        						<h5 class="card-title">Doctor Name</h5>
										<p style={{color: '#A8DADC'}}>Specialist</p>
        						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        						<div className="d-flex align-items-center">
											<img src={facebook} width='40px' height='40px' className='me-2'></img>
											<img src={instagram} width='40px' height='40px' className='me-2'></img>
											<img src={twitter} width='40px' height='40px' className='me-2'></img>
										</div>
      						</div>
    						</div>
							</div>
						</div>

						<div className="card p-0" style={{maxWidth: '480px'}}>
							<div className="row g-0">
								<div class="col-lg-4 col-md-12">
      						<img src={doctor2} class=" card-fluid rounded-start" alt="doctor1" width='100%' height='100%'/>
    						</div>
    						<div class="col-lg-8 col-md-12">
      						<div class="card-body">
        						<h5 class="card-title">Doctor Name</h5>
										<p style={{color: '#A8DADC'}}>Specialist</p>
        						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        						<div className="d-flex align-items-center">
											<img src={facebook} width='40px' height='40px' className='me-2'></img>
											<img src={instagram} width='40px' height='40px' className='me-2'></img>
											<img src={twitter} width='40px' height='40px' className='me-2'></img>
										</div>
      						</div>
    						</div>
							</div>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-evenly">
						<div className="card p-0" style={{maxWidth: '480px'}}>
							<div className="row g-0">
								<div class="col-lg-4 col-md-12">
      						<img src={doctor3} class=" card-fluid rounded-start" alt="doctor1" width='100%' height='100%'/>
    						</div>
    						<div class="col-lg-8 col-md-12">
      						<div class="card-body">
        						<h5 class="card-title">Doctor Name</h5>
										<p style={{color: '#A8DADC'}}>Specialist</p>
        						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        						<div className="d-flex align-items-center">
											<img src={facebook} width='40px' height='40px' className='me-2'></img>
											<img src={instagram} width='40px' height='40px' className='me-2'></img>
											<img src={twitter} width='40px' height='40px' className='me-2'></img>
										</div>
      						</div>
    						</div>
							</div>
						</div>

						<div className="card p-0" style={{maxWidth: '480px'}}>
							<div className="row g-0">
								<div class="col-lg-4 col-md-12">
      						<img src={doctor4} class=" card-fluid rounded-start" alt="doctor1" width='100%' height='100%'/>
    						</div>
    						<div class="col-lg-8 col-md-12">
      						<div class="card-body">
        						<h5 class="card-title">Doctor Name</h5>
										<p style={{color: '#A8DADC'}}>Specialist</p>
        						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        						<div className="d-flex align-items-center">
											<img src={facebook} width='40px' height='40px' className='me-2'></img>
											<img src={instagram} width='40px' height='40px' className='me-2'></img>
											<img src={twitter} width='40px' height='40px' className='me-2'></img>
										</div>
      						</div>
    						</div>
							</div>
						</div>
					</div>
						
					<div className='d-flex align-items-center justify-content-center'>
						<a name="search" id="search" class="btn btn-primary mt-5 " href="/findDoctor" role="button" style={{
							paddingRight: '32px',
							paddingLeft: '32px',
							textTransform: 'uppercase'
						}}>Find More</a>
					</div>
				</div>
			</div>
		</>
	)
}