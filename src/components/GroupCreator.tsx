import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TGroup } from "@/interfaces/TGroup";
import GroupSelector from "./GroupSelector";
import { TUser } from "@/interfaces/TUser";
import UserSelector from "./UserSelector";
import { useDataContextHook } from "@/contexts/AppDataContext";


export default function GroupCreator() {
    const { current_user } = useDataContextHook();
    if (!current_user?.is_admin) return null;

    const [element, setElement] = useState<TGroup>({
        id: "",
        name: "",
        parent_group: undefined,
        users: []
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setElement({ ...element, [e.target.name]: e.target.value });
    }

    function handleCreate() {
        // setCurrentItems({ ...current_items,  });
    }

    return (
        <>
            <Paper className="p-4">
                <h2 className="font-semibold">Создать новую группу</h2>
                <TextField
                    label="Название группы"
                    name="name"
                    value={element.name}
                    fullWidth
                    sx={{ mt: 2 }}
                    onChange={handleChange}
                />
                <FormGroup sx={{ mt: 2, "& > *": { mt: 2 } }}>
                    <GroupSelector field_name="Родитель" chooseGroup={(g) => g} />
                </FormGroup>
                <UserSelector />
                <Button sx={{ mt: 2 }} onClick={handleCreate} variant="contained" color="primary">
                    Создать
                </Button>
            </Paper>
        </>
    );
}