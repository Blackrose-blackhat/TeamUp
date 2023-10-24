import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
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
            <div>Clerk is loading</div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

{
}
