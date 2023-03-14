import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components';

class MainDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App:any) => (props:any) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                {/*Below we add the modal wrapper*/}
                <div id="modal-root"></div>
                </body>
            </Html>
        );
    }
}

export default MainDocument;
