import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function HomeLayout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
