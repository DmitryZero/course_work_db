'use client'
import { Act } from "@/interfaces/aliases";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDataContextHook } from "@/contexts/AppDataContext";

type TProps = {
    chooseGroup: (group: TGroup) => void
    field_name: string,
    is_read_only?: boolean,
    initial_group?: TGroup | undefined
}

export default function GroupSelector({ chooseGroup, field_name, initial_group, is_read_only }: TProps) {
    const { groups } = useDataContextHook();
    const [current_group, setCurrentGroup] = useState<TGroup | undefined | null>(groups.find(g => g.id === initial_group?.id));

    const handleChange = (event: SelectChangeEvent) => {
        const selected_group = groups.find(g => g.id === (event.target.value as string));
        setCurrentGroup(selected_group);
        chooseGroup(selected_group!)
    };

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <Autocomplete
            options={groups}
            value={current_group}
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
                <TextField {...params} label={field_name} />
            )}
            onChange={(event: any, newValue: TGroup | null) => {
                setCurrentGroup(newValue);
            }}
            sx={{ mt: 2 }}
            readOnly={is_read_only}
            disabled={is_read_only}
        />
    );
}