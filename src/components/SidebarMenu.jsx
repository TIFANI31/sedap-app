import { MdDashboard, MdShoppingCart, MdPeople } from "react-icons/md";

const menuItems = [
    { id: "menu-1", icon: <MdDashboard className="mr-4 text-xl" />, label: "Dashboard" },
    { id: "menu-2", icon: <MdShoppingCart className="mr-4 text-xl" />, label: "Orders" },
    { id: "menu-3", icon: <MdPeople className="mr-4 text-xl" />, label: "Customers" },
];

export default function SidebarMenu() {
    return (
        <ul className="space-y-3">
            {menuItems.map((item) => (
                <li key={item.id}>
                    <div
                        id={item.id}
                        className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
