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
    { id: "1", name: "Никитин Дмитрий" },
    { id: "2", name: "Ложкин Ярослав" },
    { id: "3", name: "Смирнов Никита" },
    { id: "4", name: "Максимов Андрей" },
  ];

  const groups: TGroup[] = [
    {id: "1", name: "Группа 1"},
    {id: "2", name: "Группа 2"},
  ];

  const items: TElement[] = [
    { id: "1", name: "Test 1", description: "Test 1_", permissions: {read: groups[0], write: groups[1]}},
    { id: "2", name: "Test 2", description: "Test 2_", permissions: {}},
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
