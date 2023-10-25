import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import { PropagateLoader } from "react-spinners";
export const metadata = {
  title: "TeamUp",
  description: "Find the best team you Deserve!",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-400`}>
          <ClerkLoading>
            <div className="flex flex-col h-screen items-center justify-center ">
            <PropagateLoader color="#36d7b7" />
            </div>
          

          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

{
}
