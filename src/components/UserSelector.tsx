'use client'
import { TUser } from "@/interfaces/TUser";
import { useState } from "react";

type TProps = {
    users: TUser[]
}

export default function UserSelector({ users }: TProps) {
    const [currentUser, setCurrentUser] = useState(users[0]);

    return (
        <div>
            <label className="block font-medium">Выберите пользователя:</label>
            <select
                className="p-2 border rounded"
                value={currentUser.id}
                onChange={(e) => setCurrentUser(users.find(u => u.id == e.target.value)!)}
            >
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
}