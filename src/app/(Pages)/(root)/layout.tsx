import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import { NavContextProvider } from "../../Contexts/navBarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavContextProvider>
        <main className="flex " >
            <div className="xl:w-[200px] w-[72px] sm:block hidden ">
              <NavBar/>
            </div>
            <div className="sm:hidden ">
              <NavBarMobile/>

            </div>
            <>
                  {children}
            </>
        </main>
   </NavContextProvider>
  );
}
