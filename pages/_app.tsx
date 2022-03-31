import '../styles/globals.css' ;
import type { AppProps } from 'next/app' ;

import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';


// 進度條物件
const progress = new ProgressBar({
                                    size      : 4 ,
                                    color     : "#FE595E" ,
                                    className : "z-50" ,
                                    delay     : 100

                                 }) ;

// 依照路由開始/完成，設定進度條開始/結束
Router.events.on( "routeChangeStart" , progress.start ) ;      
Router.events.on( "routeChangeComplete" , progress.finish ) ;
Router.events.on( "routeChangeError" , progress.finish ) ;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
