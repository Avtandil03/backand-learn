import React, { useState } from 'react';
import './MyForm.styles.css'
import  Axios  from 'axios';
import useInput from '../../hooks/useInput';


const MyForm = ({ submitForm, values }) => {

  const name = useInput('', { isEmpty: true, minLength: 2 })
  const comment = useInput('', { isEmpty: true, minLength: 8 })
  const gender = useInput('', { isEmpty: true, minLength: 3 })
  const email = useInput('', { isEmpty: true, minLength: 3 })
  const phone = useInput('', { isEmpty: true, minLength: 5 })
  const [formErr, setFormErr] = useState(false)

  values = {
    name: name.value,
    comment: comment.value,
    gender: gender.value,
    email: email.value,
    phone: phone.value
  }

  const submit = (e) => {
    e.preventDefault()
    if (!name.isEmpty && !comment.isEmpty) {

      console.log(values)
      Axios.post('http://localhost:5174/create', values).then(() => console.log('Sucsess'))
      submitForm()
      setFormErr(false)
    } else {
      setFormErr(true)
      name.setIsDirty(true)
      comment.setIsDirty(true)
    }

  }


  return (
    <>
      <div className="form-style-10">
        <h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
        <form onSubmit={e => submit(e)} >
          <div className="section"><span>1</span>First Name & comment</div>
          <div className="inner-wrap">
            {(name.isDirty && name.isEmpty) &&
              <div style={{ color: 'red' }}> The fields cannot be empty</div>
            }
            <label>Your Full Name <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} type="text" name="field1" value={name.value} /></label>
            {(comment.isDirty && comment.isEmpty) &&
              <div style={{ color: 'red' }}> The fields cannot be empty</div>
            }
            <label>comment <textarea onChange={e => comment.onChange(e)} onBlur={e => comment.onBlur(e)} name="field2" value={comment.value} ></textarea></label>
            {(gender.isDirty && gender.isEmpty) &&
              <div style={{ color: 'red' }}> The fields cannot be empty</div>
            }
            <label>Gender</label>
            <input onChange={e => gender.onChange(e)} onBlur={e => gender.onBlur(e)} type="text" list="gender" value={gender.value} />
            <datalist id="gender">
              <option value="Man&#128526;&#128170;" />
              <option value="Woman&#128522;&#128133;" />
              <option value="Transformer&#128128;  " />
            </datalist>
            <div className="inner-wrap">
              <label>Email comment <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} type="email" name="field3" value={email.value} /></label>
              <label>Phone Number <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} type="text" name="field4" value={phone.value} /></label>
            </div>

          </div>

          {formErr && <div style={{ color: 'red' }}> Please fill in the required fields</div>}

          <div className="button-section">
            <input type="submit" name="Sign Up" />
            <span className="privacy-policy">
              <input type="checkbox" name="field7" />You agree to our Terms and Policy.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyForm;