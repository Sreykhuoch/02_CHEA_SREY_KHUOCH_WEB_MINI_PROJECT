import SidebarComponent from "@/components/SidebarComponent";

import NavbarComponent from "@/components/NavbarComponent";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-SFProDisplay">
      <div className="flex flex-row w-full">
          <SidebarComponent className="ml-10" />
          <div className="w-full ml-10">
            <NavbarComponent />
            {children}
          </div>
        </div>    
      </body>
    </html>
  );
}
