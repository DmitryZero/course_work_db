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

type TProps = {
    is_readonly?: boolean;
}

export default function ElementList({ is_readonly }: TProps) {
    const { elements } = useDataContextHook();

    return (
        <>
            {elements.map((element) => (
                <ElementItem key={element.id} element={element} is_readonly={is_readonly} />
            ))}
        </>
    );
}