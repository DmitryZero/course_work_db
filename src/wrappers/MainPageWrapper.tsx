'use client'
import ElementCreator from "@/components/ElementCreator";
import ElementList from "@/components/ElementList";
import CurrentUserSelector from "@/components/CurrentUserSelector";
import { TElement } from "@/interfaces/TElement";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import { useState } from "react";
import GroupCreator from "@/components/GroupCreator";
// import ElementCreator from "@/components/ElementCreator";
// import ElementList from "@/components/ElementList";
// import GroupList from "@/components/GroupList";
// import Modal from "@/components/Modal";

type TProps = {
    users: TUser[],
    elements: TElement[],
    groups: TGroup[]
}

export default function MainPageWrapper({users, elements, groups}: TProps) {
    const [current_user, setCurrentUser] = useState<TUser | undefined>(users[0]);
    const [current_items, setCurrentItems] = useState<TElement>(elements[0]);

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-xl font-bold">Управление правами</h1>
            <CurrentUserSelector users={users} current_user={current_user} setCurrentUser={setCurrentUser} />
            <ElementCreator current_items={current_items} setCurrentItems={setCurrentItems} groups={groups}/>
            <ElementList elements={elements} groups={groups}  />
            <GroupCreator current_users={users} groups={groups}  />
            {/* <ElementCreator createElement={createElement} groups={groups} />
      <ElementList elements={elements} setSelectedElement={setSelectedElement} />
      <GroupList groups={groups} />
      {selectedElement && <Modal element={selectedElement} onClose={() => setSelectedElement(null)} />} */}
        </div>
    );
}
