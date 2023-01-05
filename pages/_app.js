import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";
import "../src/App.css";

const client = new QueryClient();

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={client}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </QueryClientProvider>
    );
}
