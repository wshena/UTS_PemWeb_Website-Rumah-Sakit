export default function FormComponent() {
	return (
		<>
			<div className="container pt-5 d-flex align-items-center justify-content-center">				
				<form style={{
					maxWidth:'600px',
					borderRadius: '15px', background: 'linear-gradient(145deg, #f8ffff, #d1d8e5)',
					boxShadow:  '36px 36px 72px #b0b6c1, -36px -36px 72px #ffffff'
				}} className='p-5'>
					<div className="row g-3">
						{/* <div class="col-md-6">
    					<label for="name" class="form-label">Name</label>
    					<input type="text" class="form-control" id="name" autoComplete="off"/>
  					</div>
  					<div class="col-md-6">
    					<label for="inputEmail" class="form-label">Email</label>
    					<input type="email" class="form-control" id="inputEmail" />
	 			 		</div> */}

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
								<option selected>Speciality</option>
								<option value="1">Speciality One</option>
								<option value="2">Speciality Two</option>
								<option value="3">Speciality Three</option>
							</select>
						</div>	

						<p className="text-center">Or try search by name</p>
						<div className="col-md-12 m-0">
							<select class="form-select" aria-label="Default select example">
								<option selected>Dr. Doctor Name</option>
								<option value="1">Dr. Doctor Name One</option>
								<option value="2">Dr. Doctor Name Two</option>
								<option value="3">Dr. Doctor Name Three</option>
							</select>
						</div>
						<div className="d-flex justify-content-center align-items-center">
							<a name="" id="" class="btn btn-primary" href="#" role="button" style={{
								background: 'linear-gradient(145deg, #f8ffff, #d1d8e5)',
								color: 'black'
							}}>Find Now</a>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}