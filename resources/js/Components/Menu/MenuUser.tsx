import {User} from '@/types';
import {PropsWithChildren} from 'react';
import MenuUserItem from "@/Components/Menu/MenuUserItem";
import MenuLoginItem from "@/Components/Menu/MenuLoginItem";

export default function MenuUser({user}: PropsWithChildren<{ user: User }>) {
    if (user) {
        return (
            <MenuUserItem user={user}/>
        );
    } else {
        return (
            <MenuLoginItem/>
        );
    }
}
