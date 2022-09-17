import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render () {
        return (
        <Html>
            <Head />
            <body className="bg-white sm:bg-gray-50">
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument;