import React, { useState } from 'react'

const Contact = () => {

const[name,setName]=useState('')

   const changeHandler=(e)=>{
     setName(e.target.name)
    }
    const handleClick=(e)=>{
        alert("From is Successfully Submitted")
        setName('')
    }


  return (
    <form className="row g-5 needs-validation mt-5 text-3xl" novalidate>
  <div className="col-md-2">
    <label for="validationCustom01" className="form-label mt-2">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter First name...." required onChange={changeHandler}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-2">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02"  placeholder="Enter Last name...." required onChange={changeHandler}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-2">
    <label for="validationCustomUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="email"  placeholder="Enter Email...." className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={changeHandler}/>
      <div className="invalid-feedback">
        Please choose a Email.
      </div>
    </div>
  </div>
  <div className="col-md-2">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control"  placeholder="Enter City...." id="validationCustom03" required onChange={changeHandler}/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-2">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required onChange={changeHandler}>
      <option selected disabled value="">Choose...</option>
      <option  value="West Bengal">West Bengal</option>
      <option  value="Haryana">Haryana</option>
      <option  value="Himachal Pradesh">Himachal Pradesh</option>
      <option  value="Jharkhand">Jharkhand</option>
      <option  value="Andhra Pradesh">Andhra Pradesh</option>
      <option  value="Kerala">Kerala</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-2">
    <label for="validationCustom05" className="form-label">Pin</label>
    <input type="text" className="form-control" id="validationCustom05" required onChange={changeHandler}/>
    <div className="invalid-feedback">
      Please provide a valid Pin.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required onChange={changeHandler}/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary text-3xl" type="submit" onClick={handleClick}>Submit form</button>
  </div>
</form>
  )
}

export default Contact
