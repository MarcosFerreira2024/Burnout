import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className="flex " >
            <div className="xl:w-[200px] w-[72px] sm:block hidden ">
              <NavBar/>
            </div>
            <div className="sm:hidden ">
              <NavBarMobile/>

            </div>
            <div className=" flex-1 pt-20 sm:pt-0" >
                {children}
            </div>
        </main>
  );
}
