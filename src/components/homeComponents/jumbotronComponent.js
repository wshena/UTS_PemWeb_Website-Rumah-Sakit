import healthImage from '../../assets/images/ilustrationCare-removebg-preview.png'
export default function JumbotronComponent() {
  return (
		<>
			<div className="pt-5 pb-5 rounded-3 container-fluid" style={{backgroundColor: '#E8F0FE'}}>
				<div className='row d-flex align-items-center justify-content-center'>
					<div class="col-lg-5 col-md-12">
						<h1 className="display-4 fw-bold">Top Class <span style={{color: '#16697A'}}>Health</span> <span style={{color: '#16697A'}}>Care</span> Hospital</h1>
						<p className="col-md-8 col-sm-12 fs-6 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet. Donec ultrices tincidunt arcu non.</p>
						<a href='/about'>
							<button className="btn btn-primary btn-md mt-4" type="button">Know More</button>
						</a>
					</div>
					<div className="col-lg-5 col-md-12">
						<img src={healthImage} width='100%' height='100%'></img>
					</div>
				</div>
			</div>
		</>
	)
}