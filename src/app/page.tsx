import UserSelector from "@/components/UserSelector";
import { TUser } from "@/interfaces/TUser";
// import ElementCreator from "@/components/ElementCreator";
// import ElementList from "@/components/ElementList";
// import GroupList from "@/components/GroupList";
// import Modal from "@/components/Modal";

export default function Home() {
  const users: TUser[] = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
  ];
  // const [groups, setGroups] = useState([
  //   { id: 1, name: "Admins" },
  //   { id: 2, name: "Users" },
  // ]);
  // const [elements, setElements] = useState([
  //   { id: 1, name: "Document 1", permissions: { read: true, write: false, delete: false, create: false } },
  // ]);
  // const [selectedElement, setSelectedElement] = useState(null);

  // function createElement(newElement) {
  //   setElements([...elements, { ...newElement, id: elements.length + 1 }]);
  // }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Управление правами</h1>
      <UserSelector users={users} />
      {/* <ElementCreator createElement={createElement} groups={groups} />
      <ElementList elements={elements} setSelectedElement={setSelectedElement} />
      <GroupList groups={groups} />
      {selectedElement && <Modal element={selectedElement} onClose={() => setSelectedElement(null)} />} */}
    </div>
  );
}
