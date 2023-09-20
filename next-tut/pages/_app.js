import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/layout.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    }
    return (
        <SessionProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </SessionProvider>
    );
}
