import { redirect } from "next/navigation";
import { getUser } from "../../actions/getUser";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import { NavContextProvider } from "../../Contexts/navBarContext";
import { UserContextProvider } from "../../Contexts/UserContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const data = await getUser()

    if(data instanceof Error) redirect("/login")






  return (
  <UserContextProvider user={data} >
      <NavContextProvider>
          <main className="flex  " >
              <div className="xl:w-[200px] w-[72px] sm:block hidden ">
                <NavBar/>
              </div>
              <div className="sm:hidden ">
                <NavBarMobile/>

              </div>
                    {children}
          </main>
      </NavContextProvider>
   </UserContextProvider>
  );
}
