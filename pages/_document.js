import Document, {Html, Head, Main, NextScript} from 'next/document'
class MyDocument extends Document{
    render() {
        return <Html>
            <Head lang='en'>
                <body>
                    <Main/>
                        <NextScript>


                        </NextScript>
                   <div id='notifications'/>
                </body>
            </Head>
        </Html>
    }
}
export default MyDocument;