import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setError, addSmurf } from '../actions'

const initialForm = {
  name: '',
  position: '',
  nickname: '',
  description: ''
}

const AddForm = (props) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.name === '' || form.position === '' || form.nickname === '') {
      props.setError('Name, position and nickname fields are required.')
    }
    props.addSmurf(form)
  }

  return(<section>
    <h2>Add Smurf</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label><br/>
        <input onChange={handleChange} value={form.name} name="name" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label><br/>
        <input onChange={handleChange} value={form.position} name="position" id="position" />
      </div>
      <div className="form-group">
        <label htmlFor="nickname">Nickname:</label><br/>
        <input onChange={handleChange} value={form.nickname} name="nickname" id="nickname" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label><br/>
        <textarea onChange={handleChange} value={form.description} name="description" id="description" />
      </div>
      {
        form.errorMsg && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorMessage}</div>
      }
      <button>Submit Smurf</button>
    </form>
  </section>)
}

// const mapStateToProps = state => {
//   return {
//     errorMsg: state.errorMsg
//   }
// }

export default connect(null, { setError, addSmurf })(AddForm)

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.