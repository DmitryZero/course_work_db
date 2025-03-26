'use client'
import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";
import { Button, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";
import { TGroup } from "@/interfaces/TGroup";
import { useDataContextHook } from "@/contexts/AppDataContext";
import UserSelector from "./UserSelector";

type TProps = {
    group: TGroup
    // updateElementList: Act<TElement[]>
}

export default function GroupItem({ group }: TProps) {
    const [is_open, setOpenElements] = useState<boolean>(false);

    const toggleElement = (id: string) => {
        setOpenElements((prev) => !prev);
    };

    const [currrent_group, setCurrentGroup] = useState<TGroup>(group);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentGroup({ ...currrent_group, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Paper className="p-4">
                <h3 className="font-semibold">
                    {currrent_group.name}
                    <Button
                        sx={{ ml: 2 }}
                        size="small"
                        onClick={() => toggleElement(currrent_group.id)}
                    >
                        {is_open ? "Скрыть" : "Развернуть"}
                    </Button>
                </h3>

                <Collapse in={is_open}>
                    <TextField
                        label="Название группы"
                        name="name"
                        value={currrent_group.name}
                        fullWidth
                        sx={{ mt: 2 }}
                        onChange={handleChange}
                    />
                    <UserSelector default_users={group.users} />
                    <GroupSelector initial_group={group.parent_group} field_name="Родительская группа" chooseGroup={(g) => g} />
                    <Button sx={{ mt: 2 }} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Collapse>
            </Paper>
        </>
    );
}