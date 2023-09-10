import Navigator from "./components/navigator";
import Sidebar from "./components/sidebar";
import Home from "./components/home";

export default function App() {
  return (
    <main className="flex justify-center">
      <Navigator />
      <Home />
      <Sidebar />
    </main>
  );
}
