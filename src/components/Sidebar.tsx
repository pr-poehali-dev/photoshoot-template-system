import { NavLink } from "react-router-dom";
import { Home, User, BarChart3, Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { to: "/", icon: Home, label: "Главная" },
  { to: "/profile", icon: User, label: "Личный кабинет" },
  { to: "/reports", icon: BarChart3, label: "Отчеты" },
  { to: "/clients", icon: Users, label: "Клиенты" },
  { to: "/search", icon: Search, label: "Поиск" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
                isActive && "bg-primary/10 text-primary font-medium",
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
