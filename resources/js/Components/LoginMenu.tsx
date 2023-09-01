import {User} from '@/types';
import {FormEventHandler, PropsWithChildren, useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {useForm} from "@inertiajs/react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginMenu({user, children}: PropsWithChildren<{ user: User }>) {
    const [signInPopupShow, setSignInPopupShow] = useState(false);
    const handleSignInPopupHide = () => setSignInPopupShow(false);
    const handleLoginPopupShow = () => setSignInPopupShow(true);

    const {data, setData, post, processing, errors, reset} = useForm({
        login: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    if (user) {
        return (
            <NavDropdown title={user.login} id="basic-nav-dropdown">
                <NavDropdown.Item href={route('logout')}>Sign Out</NavDropdown.Item>
            </NavDropdown>
        );
    } else {
        return (
            <div>
                <Nav.Link href="javascript:" onClick={handleLoginPopupShow}>Login</Nav.Link>

                <Modal show={signInPopupShow} onHide={handleSignInPopupHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Login</Form.Label>
                                <Form.Control
                                    autoFocus
                                    autoComplete="username"
                                    name="login"
                                    onChange={(e) => setData('login', e.target.value)}
                                    value={data.login}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    autoComplete="current-password"
                                    name="password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    type="password"
                                    value={data.password}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    checked={data.remember}
                                    label="Remember me"
                                    name="remember"
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    type="checkbox"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" disabled={processing} onClick={submit}>
                            Sign In
                        </Button>
                        <Button variant="secondary" onClick={handleSignInPopupHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
