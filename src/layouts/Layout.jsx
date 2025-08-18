import { Navbar, Footer } from "../components";
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
      <main className="flex-1 ">
        <HomePage />
      </main>

      <footer className="bg-surface z-50 shadow-2xl border-t border-edge backdrop-blur-lg">
        <div className="w-full max-w-[1440px] mx-auto px-4 pt-8">
          <div>
            <Footer />
          </div>
          <div className="border-t border-edge mt-8">
            <p className="text-center text-xs py-6 text-muted">
              © 2025 Triopecker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
