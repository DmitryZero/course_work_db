'use client'
import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";
import { Button, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";
import { TGroup } from "@/interfaces/TGroup";
import { useDataContextHook } from "@/contexts/AppDataContext";
import UserSelector from "./UserSelector";
import DeleteIcon from '@mui/icons-material/Delete';
import ElementList from "./ElementList";

type TProps = {
    group: TGroup
    // updateElementList: Act<TElement[]>
}

export default function GroupItem({ group }: TProps) {
    const [is_open, setOpenGroup] = useState<boolean>(false);
    const [is_open_read, setOpenRead] = useState<boolean>(false);
    const [is_open_write, setOpenWrite] = useState<boolean>(false);
    const [is_open_delete, setOpenDelete] = useState<boolean>(false);

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
                        onClick={() => setOpenGroup(!is_open)}
                    >
                        {is_open ? "Скрыть" : "Развернуть"}
                    </Button>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
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

                    <h3 className="font-bold mt-2">
                        Чтение
                        <Button size="small" onClick={() => setOpenRead(!is_open_read)} sx={{ ml: 2 }}>
                            {is_open_read ? "Скрыть" : "Развернуть"}
                        </Button>
                    </h3>
                    <Collapse in={is_open_read}>
                        <ElementList is_readonly={true} />
                    </Collapse>

                    <h3 className="font-bold mt-2">
                        Редактирование
                        <Button size="small" onClick={() => setOpenWrite(!is_open_write)} sx={{ ml: 2 }}>
                            {is_open_write ? "Скрыть" : "Развернуть"}
                        </Button>
                    </h3>
                    <Collapse in={is_open_write}>
                        <ElementList is_readonly={true} />
                    </Collapse>

                    <h3 className="font-bold mt-2">
                        Удаление
                        <Button size="small" onClick={() => setOpenDelete(!is_open_delete)} sx={{ ml: 2 }}>
                            {is_open_delete ? "Скрыть" : "Развернуть"}
                        </Button>
                    </h3>
                    <Collapse in={is_open_delete}>
                        <ElementList is_readonly={true} />
                    </Collapse>

                    <Button sx={{ mt: 2 }} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Collapse>
            </Paper>
        </>
    );
}