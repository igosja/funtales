import {PropsWithChildren} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {User} from '@/types';
import LoginMenu from "@/Components/LoginMenu";

export default function MainLayout({user, children}: PropsWithChildren<{ user: User }>) {
    return (
        <div>
            <header id="header">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href={route('home')}>Fun Tales</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href={route('home')}>Home</Nav.Link>
                                <LoginMenu user={user}/>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main id="main" className="flex-shrink-0" role="main">
                <div className="container">
                    {children}
                </div>
            </main>
            <footer id="footer" className="mt-auto py-3 bg-light">
                <div className="container">
                    <div className="row text-muted">
                        <div className="col-md-6 text-center text-md-start">&copy; FunTales</div>
                        <div className="col-md-6 text-center text-md-end">ReactJS</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
