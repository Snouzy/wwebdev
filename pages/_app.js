
import { Lato } from 'next/font/google'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from '../ui/theme'
import GlobalContext from '../utils/context'

import "../ui/global.css"
import "../ui/ads.css"

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900']
})

function MyApp({ Component, pageProps }) {
    return (
        <GlobalContext>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <div className={lato.className}>
                        <Component {...pageProps} />
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </GlobalContext>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// //
// MyApp.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);
//     return { ...appProps }
// }

export default MyApp
