import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
