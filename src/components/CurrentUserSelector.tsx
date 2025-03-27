'use client'
import { useDataContextHook } from "@/contexts/AppDataContext";
import { Act } from "@/interfaces/aliases";
import { TUser } from "@/interfaces/TUser";
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


export default function CurrentUserSelector() {
    const { users, current_user, updateCurrentUser } = useDataContextHook();

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <Autocomplete
            options={users}
            value={current_user}
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
                <TextField {...params} label={"Текущий пользователь"} />
            )}
            onChange={(event: any, newValue: TUser | null) => {
                updateCurrentUser(newValue);
            }}
            sx={{ mt: 2 }}
        />
    );
}