import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen p-8">
      <Outlet />
    </div>
  );
}