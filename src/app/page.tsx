import CurrentUserSelector from "@/components/CurrentUserSelector";
import { TElement } from "@/interfaces/TElement";
import { TGroup } from "@/interfaces/TGroup";
import { TUser } from "@/interfaces/TUser";
import MainPageWrapper from "@/wrappers/MainPageWrapper";
// import ElementCreator from "@/components/ElementCreator";
// import ElementList from "@/components/ElementList";
// import GroupList from "@/components/GroupList";
// import Modal from "@/components/Modal";

export default function Home() {
  const users: TUser[] = [
    { id: "1", name: "Admin - Никитин Дмитрий", is_admin: true },
    { id: "2", name: "Ложкин Ярослав" },
    { id: "3", name: "Смирнов Никита" },
    { id: "4", name: "Максимов Андрей" },
  ];

  const groups: TGroup[] = [
    {id: "1", name: "Группа 1", users: [users[0], users[1]]},
    {id: "2", name: "Группа 2"},
  ];

  groups[0].parent_group = groups[1];

  const items: TElement[] = [
    { id: "1", name: "Test 1", description: "Test 1_", permissions: {read: groups[0], write: groups[1]}},
    { id: "2", name: "Test 2", description: "Test 2_", permissions: {}},
    { id: "3", name: "Test 3", description: "Test 3_", permissions: {}},
    { id: "4", name: "Test 4", description: "Test 4_", permissions: {}},
    { id: "5", name: "Test 5", description: "Test 5_", permissions: {}},
  ];

  return (
    <div className="p-4 space-y-4">
      <MainPageWrapper users={users} elements={items} groups={groups}/>
      {/* <ElementCreator createElement={createElement} groups={groups} />
      <ElementList elements={elements} setSelectedElement={setSelectedElement} />
      <GroupList groups={groups} />
      {selectedElement && <Modal element={selectedElement} onClose={() => setSelectedElement(null)} />} */}
    </div>
  );
}
