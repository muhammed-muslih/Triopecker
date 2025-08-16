import { Navbar } from "../components";
import HomePage from "../pages/HomePage";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="bg-surface text-[15px] fixed top-0 left-0 right-0 z-50 shadow">
        <div className="w-full max-w-[1440px] mx-auto px-4 h-16 text-dark flex-center">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <HomePage />
      </main>
    </div>
  );
};
export default Layout;
