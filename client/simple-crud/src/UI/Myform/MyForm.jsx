import React from 'react';
import './MyForm.styles.css'
import useInput from '../../hooks/useInput';


const MyForm = () => {

  const name = useInput('', {isEmpty: true, minLength: 2})
  const address = useInput('', {isEmpty: true, minLength: 3})
  const gender = useInput('')
  const email = useInput('', {isEmpty: true, minLength: 2})
  const phone = useInput('', {isEmpty: true, minLength: 2})







  return (
    <>
      <div className="form-style-10">
        <h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
        <form>
          <div className="section"><span>1</span>First Name & Address</div>
          <div className="inner-wrap">
            <label>Your Full Name <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)}type="text" name="field1" value={name.value} /></label>
            <label>Address <textarea onChange={e => address.onChange(e)} onBlur={e => address.onBlur(e)} name="field2" value={address.value} ></textarea></label>
            <label>Gender</label>
            <input onChange={e => gender.onChange(e)} onBlur={e => gender.onBlur(e)}type="text" list="gender" value={gender.value}/>
            <datalist id="gender">
              <option value="Man&#128526;&#128170;" />
              <option value="Woman&#128522;&#128133;" />
              <option value="Transformer&#128128;  " />
            </datalist>
            <div className="inner-wrap">
              <label>Email Address <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}type="email" name="field3" value={email.value}/></label>
              <label>Phone Number <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)}type="text" name="field4" value={phone.value}/></label>
            </div>

          </div>

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