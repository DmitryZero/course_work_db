'use client'
import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";
import { Button, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";
import { TGroup } from "@/interfaces/TGroup";
import { useDataContextHook } from "@/contexts/AppDataContext";

type TProps = {
    element: TElement
    // updateElementList: Act<TElement[]>
}

export default function ElementItem({ element }: TProps) {
    const [is_open, setOpenElements] = useState<boolean>(false);

    const toggleElement = (id: string) => {
        setOpenElements((prev) => !prev);
    };

    const [currrent_element, setCurrentElement] = useState<TElement>(element);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentElement({ ...currrent_element, [e.target.name]: e.target.value });
    }

    function handlePermissionChange(permission: "read" | "write" | "delete", group: TGroup) {
        setCurrentElement((prev) => ({
            ...prev,
            permissions: {
                ...prev.permissions,
                [permission]: group
            },
        }));
    }

    return (
        <>
            <Paper className="p-4">
                <h3 className="font-semibold">
                    {currrent_element.name}
                    <Button
                        sx={{ ml: 2 }}
                        size="small"
                        onClick={() => toggleElement(currrent_element.id)}
                    >
                        {is_open ? "Скрыть" : "Развернуть"}
                    </Button>
                </h3>

                <Collapse in={is_open}>
                    <TextField
                        label="Название элемента"
                        name="name"
                        value={currrent_element.name}
                        fullWidth
                        sx={{ mt: 2 }}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Описание"
                        name="description"
                        value={currrent_element.description}
                        fullWidth
                        sx={{ mt: 2 }}
                        onChange={handleChange}
                    />
                    <FormGroup sx={{ mt: 2, "& > *": { mt: 2 } }}>
                        <GroupSelector initial_group={currrent_element.permissions.read} field_name="Чтение" chooseGroup={(g) => handlePermissionChange("read", g)} />
                        <GroupSelector initial_group={currrent_element.permissions.write} field_name="Редактирование" chooseGroup={(g) => handlePermissionChange("write", g)} />
                        <GroupSelector initial_group={currrent_element.permissions.delete} field_name="Удаление" chooseGroup={(g) => handlePermissionChange("delete", g)} />
                    </FormGroup>
                    <Button sx={{ mt: 2 }} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Collapse>
            </Paper>
        </>
    );
}