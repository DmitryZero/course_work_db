import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TGroup } from "@/interfaces/TGroup";
import GroupSelector from "./GroupSelector";

type TProps = {
    current_items: TElement;
    setCurrentItems: Act<TElement>;
    groups: TGroup[]
}

export default function ElementCreator({ current_items, setCurrentItems, groups }: TProps) {
    const [element, setElement] = useState<TElement>({
        id: "",
        name: "",
        description: "",
        permissions: {
            read: undefined,
            write: undefined,
            delete: undefined
        }
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setElement({ ...element, [e.target.name]: e.target.value });
    }

    function handlePermissionChange(permission: "read" | "write" | "delete", group: TGroup) {
        setElement((prev) => ({
            ...prev,
            permissions: {
                ...prev.permissions,
                [permission]: group
            },
        }));
    }

    function handleCreate() {
        // setCurrentItems({ ...current_items,  });
    }

    return (
        <Paper className="p-4">
            <h2 className="font-semibold">Создать новый элемент</h2>
            <TextField
                label="Название элемента"
                name="name"
                value={element.name}
                fullWidth
                sx={{ mt: 2 }}
                onChange={handleChange}
            />
            <TextField
                label="Описание"
                name="description"
                value={element.description}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
            />
            <FormGroup sx={{ mt: 2, "& > *": { mt: 2 } }}>
                <GroupSelector groups={groups} field_name="Чтение" chooseGroup={(g) => handlePermissionChange("read", g)} />
                <GroupSelector groups={groups} field_name="Редактирование" chooseGroup={(g) => handlePermissionChange("write", g)} />
                <GroupSelector groups={groups} field_name="Удаление" chooseGroup={(g) => handlePermissionChange("delete", g)} />
            </FormGroup>
            <Button sx={{ mt: 2 }} onClick={handleCreate} variant="contained" color="primary">
                Создать
            </Button>
        </Paper>
    );
}