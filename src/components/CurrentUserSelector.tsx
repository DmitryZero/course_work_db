'use client'
import { useDataContextHook } from "@/contexts/AppDataContext";
import { Act } from "@/interfaces/aliases";
import { TUser } from "@/interfaces/TUser";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";


export default function CurrentUserSelector() {
    const {users} = useDataContextHook();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected_user = users.find(u => u.id === (event.target as HTMLInputElement).value);
        console.log(selected_user)
        // setCurrentUser(selected_user!);
    };

    return (
        <div className="border-1 border-b-amber-900 p-2 rounded-2xl">
            <FormControl className="">
                <FormLabel id="demo-radio-buttons-group-label">Текущий пользователь</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    {users.map((user) => (
                        <FormControlLabel key={user.id} value={user.id} control={<Radio />} label={user.name} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}