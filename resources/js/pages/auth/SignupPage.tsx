import MainLayout from "../layout/MainLayout";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import axios from "axios";

const SignupPage = () => {
    const url = '/api/signup';

    const [validated, setValidated] = useState(false);

    const [inputs, setInputs] = useState({
        email: '',
        login: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({
        email: [],
        login: [],
        password: [],
        password_confirmation: [],
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        axios
            .post(url, inputs)
            .then(data => {
                setErrors({
                    email: [],
                    login: [],
                    password: [],
                    password_confirmation: [],
                });

                if (data.data.data.id) {
                    console.log('Registration success');
                }
            })
            .catch(function (error) {
                setErrors({
                    email: error.response.data.errors.email ?? [],
                    login: error.response.data.errors.login ?? [],
                    password: error.response.data.errors.password ?? [],
                    password_confirmation: error.response.data.errors.password_confirmation ?? [],
                });
            });

        setValidated(true);
    };

    return (
        <MainLayout>
            <h1 className="text-center">Signup</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="Login"
                        name="login"
                        value={inputs.login}
                        onChange={handleChange}
                        isInvalid={!!errors.login.length}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.login[0]}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email.length}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email[0]}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password.length}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password[0]}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password confirmation"
                        name="password_confirmation"
                        value={inputs.password_confirmation}
                        onChange={handleChange}
                        isInvalid={!!errors.password_confirmation.length}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password_confirmation[0]}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">
                    Save
                </Button>
            </Form>

            <div>
                <Link to={'/login'}>
                    Login
                </Link>
            </div>
        </MainLayout>
    )
}

export default SignupPage
