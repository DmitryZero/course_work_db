'use client'
import { Act } from "@/interfaces/aliases";
import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";
import { Button, Collapse, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";
import { TGroup } from "@/interfaces/TGroup";
import ElementItem from "./ElementItem";
import { useDataContextHook } from "@/contexts/AppDataContext";
import GroupItem from "./GroupItem";


export default function GroupList() {
    const { groups } = useDataContextHook();

    return (
        <>
            <h2 className="text-xl font-bold">Список групп</h2>
            {groups.map((group) => (
                <GroupItem key={group.id} group={group} />
            ))}
        </>
    );
}