'use client'
import ElementCreator from "@/components/ElementCreator";
import ElementList from "@/components/ElementList";
import CurrentUserSelector from "@/components/CurrentUserSelector";
import { TElement } from "@/interfaces/TElement";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import { createContext, useState } from "react";
import GroupCreator from "@/components/GroupCreator";
import { AppDataProvider } from "@/contexts/AppDataContext";
import GroupList from "@/components/GroupList";
// import ElementCreator from "@/components/ElementCreator";
// import ElementList from "@/components/ElementList";
// import GroupList from "@/components/GroupList";
// import Modal from "@/components/Modal";

type TProps = {
    users: TUser[],
    elements: TElement[],
    groups: TGroup[]
}

interface DataContext {
    users: TUser[],
    groups: TGroup[],
    elements: TElement[]
}

export default function MainPageWrapper({ users, elements, groups }: TProps) {
    const [current_user, setCurrentUser] = useState<TUser | undefined>(users[0]);
    const [current_items, setCurrentItems] = useState<TElement>(elements[0]);

    const CounterContext = createContext<DataContext | undefined>(undefined);

    return (
        <AppDataProvider initialData={{ users, elements, groups }}>
            <div className="p-4 space-y-4">
                <h1 className="text-xl font-bold">Управление правами</h1>
                <CurrentUserSelector />
                <ElementCreator />
                <ElementList />
                <GroupCreator />
                <GroupList />
                {/* <ElementCreator createElement={createElement} groups={groups} />
      <ElementList elements={elements} setSelectedElement={setSelectedElement} />
      <GroupList groups={groups} />
      {selectedElement && <Modal element={selectedElement} onClose={() => setSelectedElement(null)} />} */}
            </div>
        </AppDataProvider>
    );
}
