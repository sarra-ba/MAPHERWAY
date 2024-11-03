import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { loginUser } from '../Redux/LoginApi';
import './LoginFormStyle.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { loading, errorMessage } = useSelector((state) => state.auth);

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        userType: 'user', 
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(loginUser(formValues));
            if (loginUser.fulfilled.match(resultAction)) {
                const userId = resultAction.payload.userId;
                const role = resultAction.payload.user.role;
                if (userId) {
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('role', role); // Save role for future reference
                    navigate('/dashboard'); 
                }
            } else {
                console.error(resultAction.payload.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="login-form-container">
            <div className="wrapper">
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleLogin} className="form-box">
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <select
                            name="userType"
                            value={formValues.userType}
                            onChange={handleInputChange}
                        >
                            <option value="user">User</option>
                            <option value="police">Police</option>
                        </select>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" disabled={loading} className="button">
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="register-link">
                    <p>
                        Don't have an account? <Link to="/SignupForm">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
