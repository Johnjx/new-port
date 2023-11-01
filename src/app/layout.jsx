import "./globals.css";
import "@radix-ui/themes/styles.css";
import "../../theme-config.css";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProv } from "../../utils/providers/themeProv";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JohnJX",
  description: "Personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProv>
          <Theme
            accentColor="sky"
            // radius="small"
          >
            {children}
            {/* <ThemePanel /> */}
          </Theme>
        </ThemeProv>
      </body>
    </html>
  );
}
