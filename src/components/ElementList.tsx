'use client'
import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";
import { Button, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";
import { TGroup } from "@/interfaces/TGroup";

type TProps = {
    groups: TGroup[],
    elements: TElement[],
    // updateElementList: Act<TElement[]>
}

export default function ElementList({ elements, groups }: TProps) {
    const [openElements, setOpenElements] = useState<{ [key: string]: boolean }>({});

    const toggleElement = (id: string) => {
        setOpenElements((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <h2 className="text-xl font-bold">Список элементов</h2>
            {elements.map((element) => (
                <Paper key={element.id} className="p-4">
                    <h3 className="font-semibold">
                        {element.name}
                        <Button 
                            sx={{ ml: 2 }} 
                            size="small" 
                            onClick={() => toggleElement(element.id)}
                        >
                            {openElements[element.id] ? "Скрыть" : "Развернуть"}
                        </Button>
                    </h3>
                    
                    <Collapse in={openElements[element.id]}>
                        <TextField
                            label="Название элемента"
                            name="name"
                            value={element.name}
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            label="Описание"
                            name="description"
                            value={element.description}
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                        <FormGroup sx={{ mt: 2, "& > *": { mt: 2 } }}>
                            <GroupSelector initial_group={element.permissions.read} groups={groups} field_name="Чтение" chooseGroup={(g) => g} />
                            <GroupSelector initial_group={element.permissions.write} groups={groups} field_name="Редактирование" chooseGroup={(g) => g} />
                            <GroupSelector initial_group={element.permissions.delete} groups={groups} field_name="Удаление" chooseGroup={(g) => g} />
                        </FormGroup>
                        <Button sx={{ mt: 2 }} variant="contained" color="primary">
                            Обновить
                        </Button>
                    </Collapse>
                </Paper>
            ))}
        </>
    );
}