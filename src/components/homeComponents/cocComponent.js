import cardiovascular from '../../assets/images/cardiovascular.jpeg'

export default function CoCComponent() {
	return (
		<>
			<div className="container pt-5 pb-5 text-center">
				<h1>Center Of Exellence</h1>
				<div className="row d-flex align-items-center justify-content-between mb-5 mt-5">
					<div className="col-lg-3 col-md-6 card p-0" style={{
						border: 'none',
						backgroundColor: '#D2DDDE'
					}}>						
						<img className="card-image-top" src={cardiovascular} width='100%' height='100%'/>
						<div className='card-body'>
							<div className='card-title'>
								<h5>Cardiovascular Center</h5>
							</div>
							<div className='card-text'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 card p-0" style={{
						border: 'none',
						backgroundColor: '#D2DDDE'
					}}>						
						<img className="card-image-top" src={cardiovascular} width='100%' height='100%'/>
						<div className='card-body'>
							<div className='card-title'>
								<h5>Cardiovascular Center</h5>
							</div>
							<div className='card-text'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 card p-0" style={{
						border: 'none',
						backgroundColor: '#D2DDDE'
					}}>						
						<img className="card-image-top" src={cardiovascular} width='100%' height='100%'/>
						<div className='card-body'>
							<div className='card-title'>
								<h5>Cardiovascular Center</h5>
							</div>
							<div className='card-text'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<a name="" id="" class="btn btn-primary" href="/coe" role="button">See More</a>
				</div>				
			</div> 
		</>
	)
}