'use client'
import { Act } from "@/interfaces/aliases";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDataContextHook } from "@/contexts/AppDataContext";

type TProps = {
    default_users?: TUser[] | undefined
    // updateElementList: Act<TElement[]>
}

export default function UserSelector({ default_users }: TProps) {
    const [selected_users, setSelectedUsers] = useState<TUser[]>(default_users || []);

    const { users } = useDataContextHook();

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <Autocomplete
            multiple
            options={users}
            value={selected_users}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </li>
                );
            }}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField sx={{ mt: 2 }} {...params} label="Пользователи" />
            )}
            onChange={(event: any, newValue: TUser[] | null) => {
                setSelectedUsers(newValue || []);
            }}
            sx={{ mt: 2 }}
        />
    );
}