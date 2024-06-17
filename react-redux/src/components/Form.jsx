import React from 'react'

const Form = () => {
    return (
        <div>
            <form className='w-50 mx-auto my-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="male" />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="female" />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form></div>
    )
}

export default Form