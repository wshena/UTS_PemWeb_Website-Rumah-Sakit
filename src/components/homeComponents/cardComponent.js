import firstIcons from '../../assets/icons/24-hours-phone-service.png'
import secondIcons from '../../assets/icons/health-and-safety-color-icon.png'
import thirdIcons from '../../assets/icons/processor-icon.png'

export default function CardComponent() {
	return (
		<>
			<div className="container pt-5 pb-5">
				<h1 className='display-5 d-flex align-items-center justify-content-center mb-5' style={{
					textTransform: 'uppercase',
					fontWeight: 'bold',
					color: '#16697A'
				}}> Why Choose Us</h1>
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-3 col-md-12 p-4 align-items-start mb-3 mt-3" style={{backgroundColor: '#82C0CC', color: '#fff', borderRadius:'20px'}}>
						<img src={firstIcons} width='50px' height="50px"></img>
						<h1 style={{
							fontSize: '1rem',
							fontWeight: 'bold',
							marginTop: '2em',
							marginBottom: '2em'
						}}> 24 Hours Services </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p>
						<a href="#" className="text-decoration-none" style={{
							color: '#fff',
							paddingBottom: '2px',
							borderBottom: '3px solid #fff',
							
						}}>Read More</a>
					</div>

					<div className="col-lg-3 col-md-12 p-4 align-items-start mb-3 mt-3" style={{backgroundColor: '#82C0CC', color: '#fff', borderRadius:'20px'}}>
						<img src={thirdIcons} width='50px' height="50px"></img>
						<h1 style={{
							fontSize: '1rem',
							fontWeight: 'bold',
							marginTop: '2em',
							marginBottom: '2em'
						}}> High Tech Equipment </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p>
						<a href="#" className="text-decoration-none" style={{
							color: '#fff',
							paddingBottom: '2px',
							borderBottom: '3px solid #fff',
							
						}}>Read More</a>
					</div>

					<div className="col-lg-3 col-md-12 p-4 align-items-start mb-3 mt-3" style={{backgroundColor: '#82C0CC', color: '#fff', borderRadius:'20px'}}>
						<img src={secondIcons} width='50px' height="50px"></img>
						<h1 style={{
							fontSize: '1rem',
							fontWeight: 'bold',
							marginTop: '2em',
							marginBottom: '2em'
						}}> Deliver The Best Services </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.</p>
						<a href="#" className="text-decoration-none" style={{
							color: '#fff',
							paddingBottom: '2px',
							borderBottom: '3px solid #fff',
							
						}}>Read More</a>
					</div>
				</div>
			</div>
		</>
	)
}

const border = {
	border: '1px solid #FFA62B'
}