import surgeonImage from '../../assets/images/vecteezy_doctor-and-assistant-perform-surgery_1226507.jpg'

export default function AboutComponent() {
  return (
		<>
			<div className="container pt-5 pb-5">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-12">
						<img src={surgeonImage} width='100%' height='100%'></img>
					</div>
					<div className="col-lg-6 col-md-12 text-align-start">
						<p className='mb-2' style={{color: '#A8DADC', fontWeight: 'bolder', borderBottom: '3px solid #27697B', width: '80px'}}>About Us</p>
						<h1 className='mb-2' style={{fontWeight: 'bold'}}>Best Medical Care For Yourself and Your Family</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor vitae purus faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
						<a name="button" id="button" class="btn btn-primary" href="/about" role="button">Continue</a>
					</div>
				</div>
			</div>
		</>
	)
}