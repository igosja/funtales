import {User} from '@/types';
import {PropsWithChildren} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MenuUserItem({user}: PropsWithChildren<{ user: User }>) {
    return (
        <NavDropdown title={user.login} id="basic-nav-dropdown">
            <NavDropdown.Item href={route('logout')}>Sign Out</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href={route('post.create')}>Create post</NavDropdown.Item>
        </NavDropdown>
    );
}
