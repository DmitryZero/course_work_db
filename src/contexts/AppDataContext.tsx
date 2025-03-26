import { TElement } from "@/interfaces/TElement";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import React, { createContext, useContext, useState } from "react";

// Создаём тип для контекста
interface DataContext {
    users: TUser[],
    groups: TGroup[],
    elements: TElement[],
    createGroup: (group: TGroup) => void,
    updateGroup: (group: TGroup) => void,
    createElement: (element: TElement) => void,
    updateElement: (element: TElement) => void,
}
// Создаём сам контекст
const AppDataContext = createContext<DataContext | undefined>(undefined);

// Провайдер состояния
export const AppDataProvider: React.FC<{ children: React.ReactNode, initialData?: Partial<DataContext> }> = ({ children, initialData }) => {
    const [users, setUsers] = useState<TUser[]>(initialData?.users || []);
    const [groups, setGroups] = useState<TUser[]>(initialData?.groups || []);
    const [elements, setElements] = useState<TElement[]>(initialData?.elements || []);

    const createGroup = (group: TGroup) => {
        setGroups((prevGroups) => [...prevGroups, group]);
    }

    const updateGroup = (group: TGroup) => {
        setGroups((prevGroups) =>
            prevGroups.map(g => g.id === group.id ? { ...g, ...group } : g)
        );
    }

    const createElement = (element: TElement) => {
        setElements((prevElements) => [...prevElements, element]);
    }

    const updateElement = (element: TElement) => {
        setElements((prevElements) =>
            prevElements.map(e => e.id === element.id ? { ...e, ...element } : e)
        );
    }

    return (
        <AppDataContext.Provider value={{ users, groups, elements, createGroup, updateGroup, createElement, updateElement }}>
            {children}
        </AppDataContext.Provider>
    );
};

// Хук для использования контекста
export const useDataContextHook = () => {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error("useDataContextHook must be used within a CounterProvider");
    }
    return context;
};
