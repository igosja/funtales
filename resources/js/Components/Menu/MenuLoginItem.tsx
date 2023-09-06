import {FormEventHandler, PropsWithChildren, useState} from 'react';
import Nav from "react-bootstrap/Nav";
import {useForm} from "@inertiajs/react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MenuLoginItem({}: PropsWithChildren) {
    const [signInPopupShow, setSignInPopupShow] = useState(false);
    const [validated, setValidated] = useState(false);
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
        setValidated(true);
    };

    return (
        <div>
            <Nav.Link href="javascript:" onClick={handleLoginPopupShow}>Login</Nav.Link>

            <Modal show={signInPopupShow} onHide={handleSignInPopupHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={submit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                autoFocus
                                autoComplete="username"
                                isInvalid={!!errors.login}
                                name="login"
                                onChange={(e) => setData('login', e.target.value)}
                                required
                                value={data.login}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.login}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                autoComplete="current-password"
                                isInvalid={!!errors.password}
                                name="password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                type="password"
                                value={data.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
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
