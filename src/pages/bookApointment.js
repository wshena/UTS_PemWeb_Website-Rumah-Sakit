export default function BookApointment() {
    return (
    	<>
      <div className="container-fluid">
				<div className="container pt-5 pb-5">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-12">
						<form style={{
					maxWidth:'600px',
					borderRadius: '15px', background: 'linear-gradient(145deg, #f8ffff, #d1d8e5)',
					boxShadow:  '36px 36px 72px #b0b6c1, -36px -36px 72px #ffffff'
				}} className='p-5'>
							<div className="row g-3">
								<div className="col-md-6">
									<input type="text" class="form-control" id="name" placeholder="Your Name" autoComplete="off"/>
								</div>
								<div className="col-md-6">
									<input type="email" class="form-control" id="email" placeholder="Your Email" autoComplete="off"/>
								</div>
								<div className="col-md-6">
									<select class="form-select" aria-label="Default select example">
										<option selected>Departement</option>
										<option value="1">Departemnt One</option>
										<option value="2">Departemnt Two</option>
										<option value="3">Departemnt Three</option>
									</select>
								</div>
								<div className="col-md-6">
									<select class="form-select" aria-label="Default select example">
										<option selected>Select Doctor</option>
										<option value="1">Doctor One</option>
										<option value="2">Doctor Two</option>
										<option value="3">Doctor Three</option>
									</select>
								</div>
								<div className="col-md-6">
									<label for="Date">Date</label>
									<input id="Date" class="form-control" type="date" />
								</div>
								<div className="col-md-6">
									<label for="Time">Time</label>
									<input id="Time" class="form-control" type="time" />
								</div>

								<div class="d-grid gap-2">
									<button type="button" name="" id="" class="btn btn-primary">Make Apointment</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-lg-6 col-md-12 text-align-start">
						<p className='mb-2' style={{color: '#A8DADC', fontWeight: 'bolder', borderBottom: '3px solid #27697B', width: '80px'}}>Apoinment</p>
						<h1 className='mb-2' style={{fontWeight: 'bold'}}>Make an Apointment For Your Family</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor vitae purus faucibus. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
					</div>
				</div>
				</div>
      </div>
			</>
    )
}