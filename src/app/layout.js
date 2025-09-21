
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from "../components/Header.jsx";
import "./globals.css";



export const metadata = {
  title: "Todo App",
  description: "Task of next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
