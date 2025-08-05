
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
