'use client'
import { Act } from "@/interfaces/aliases";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type TProps = {
    groups: TGroup[],
    chooseGroup: (group: TGroup) => void
    field_name: string,
    is_read_only?: boolean,
    initial_group?: TGroup | undefined
}

export default function GroupSelector({ groups, chooseGroup, field_name, initial_group }: TProps) {
    const [current_group, setCurrentGroup] = useState<TGroup | undefined>(groups.find(g => g.id === initial_group?.id));

    const handleChange = (event: SelectChangeEvent) => {
        const selected_group = groups.find(g => g.id === (event.target.value as string));
        setCurrentGroup(selected_group);
        chooseGroup(selected_group!)
    };

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id={field_name}>{field_name}</InputLabel>
                <Select
                    labelId={field_name}
                    value={current_group?.id || ""}
                    label={field_name}
                    onChange={handleChange}
                >
                    {groups.map((group) => (
                        <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}