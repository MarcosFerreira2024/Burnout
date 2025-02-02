import { getCart } from "../../actions/cart";
import { getUser } from "../../actions/user";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import { NavContextProvider } from "../../Contexts/navBarContext";
import { UserContextProvider } from "../../Contexts/UserContext";

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const data = await getUser();

  if(data instanceof Error) throw new Error (data.message)

  const dataCart = await getCart()



  
  return (
    <UserContextProvider  user={data} cart={dataCart}  >
      <NavContextProvider>
        <main className="flex">
          <div className="xl:w-[200px] w-[72px] sm:block hidden">
            <NavBar />
          </div>
          <div className="sm:hidden">
            <NavBarMobile />
          </div>
          {children}
        </main>
      </NavContextProvider>
    </UserContextProvider>
  );
}