import facebook from '../assets/icons/facebook-round-icon.png'
import twitter from '../assets/icons/twitter-round-icon.png'
import instagram from '../assets/icons/instagram-round-icon.png'

import doctor1 from '../assets/images/pexels-antoni-shkraba-6749773.jpg'
import doctor2 from '../assets/images/pexels-thirdman-5327580.jpg'
import doctor3 from '../assets/images/pexels-thirdman-5327585.jpg'
import doctor4 from '../assets/images/pexels-pavel-danilyuk-5998468.jpg'
import FormComponent from '../components/findDoctorComponent/formComponent'

export default function FindDoctor() {
    return (
        <>
          <FormComponent />
					<div className='container pt-5 pb-5'>
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
					</div>

					{/* Pagination */}
					<div className='container pb-5 pt-5 d-flex align-items-center justify-content-center'>
						<nav aria-label="Page navigation example">
							<ul class="pagination">
								<li class="page-item">
									<a class="page-link" href="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</a>
								</li>
								<li class="page-item"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">4</a></li>
								<li class="page-item"><a class="page-link" href="#">5</a></li>
								<li class="page-item"><a class="page-link" href="#">6</a></li>
								<li class="page-item"><a class="page-link" href="#">7</a></li>
								<li class="page-item"><a class="page-link" href="#">8</a></li>
								<li class="page-item"><a class="page-link" href="#">...</a></li>
								<li class="page-item"><a class="page-link" href="#">100</a></li>
								<li class="page-item"><a class="page-link" href="#">101</a></li>
								<li class="page-item">
									<a class="page-link" href="#" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>

        </>
    )
}