import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from './Redux/RegisterApi';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.signup);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'normal',
    policeStation: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formValues.password)) {
      setPasswordError('Password must be at least 8 characters, include an uppercase letter, a number, and a symbol.');
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setPasswordError('');

    const { name, email, password, role, policeStation } = formValues;
    const userData = { name, email, password, role };

    if (role === 'police') {
      userData.policeStation = policeStation;
    }

    dispatch(signupUser(userData));
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1>Join Our Community of Women</h1>
        <p>Sign up to connect with like-minded women and access exclusive content.</p>
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSignup}>
          <div style={styles.inputBox}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formValues.name}
              onChange={handleInputChange}
              style={styles.input}
            />
            <div style={styles.icon}>
              <FaUser />
            </div>
          </div>
          <div style={styles.inputBox}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formValues.email}
              onChange={handleInputChange}
              style={styles.input}
            />
            <div style={styles.icon}>
              <FaUser />
            </div>
          </div>
          <div style={styles.inputBox}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formValues.password}
              onChange={handleInputChange}
              style={styles.input}
            />
            <div style={styles.icon}>
              <RiLockPasswordFill />
            </div>
          </div>
          {passwordError && <p style={styles.errorMessage}>{passwordError}</p>}
          <div style={styles.inputBox}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              style={styles.input}
            />
            <div style={styles.icon}>
              <RiLockPasswordFill />
            </div>
          </div>
          <div style={styles.roleSelection}>
            <label>
              <input
                type="radio"
                name="role"
                value="normal"
                checked={formValues.role === 'normal'}
                onChange={handleInputChange}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="police"
                checked={formValues.role === 'police'}
                onChange={handleInputChange}
              />
              Police Officer
            </label>
          </div>
          {formValues.role === 'police' && (
            <div style={styles.inputBox}>
              <input
                type="text"
                name="policeStation"
                placeholder="Police Station Name"
                required
                value={formValues.policeStation}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
          )}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' },
  wrapper: { maxWidth: '600px', width: '100%', padding: '20px', background: '#6aa5f8', borderRadius: '8px', boxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)' },
  roleSelection: { margin: '15px 0', display: 'flex', justifyContent: 'space-between' },
  successMessage: { color: 'green', fontSize: '1rem', marginBottom: '15px' },
  errorMessage: { color: 'rgb(102, 161, 244)', fontSize: '0.875rem', marginTop: '5px' },
};

export default SignupForm;
