import aboutBg from '../assets/images/vecteezy_medicine-doctor-hand-working-with-modern-computer-interface__229.jpg'
import img1 from '../assets/images/10830-removebg-preview.png'

export default function AboutPage() {
	return (
		<>
			<div className="container-fluid p-0" style={{height: '400px'}}> 
				<img src={aboutBg} width='100%' height='100%'></img> </div>

			<div className='container pt-5 pb-5'>
				<div className='row d-flex align-items-center justify-content-between'>
					<div className='col-lg-1 col-md-12'>
						<img src={img1}></img>
					</div>
					<div className='col-lg-6 col-md-12 text-start'>
						<h1 style={{textTransform: 'uppercase', fontWeight: 'bold', color: '#16697A', marginBottom: '1em'}}>About People Care Hospital</h1>
						<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
						<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
						<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
						<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
						<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
					</div>
				</div>
			</div>
		</>
	)
}