import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import { SmallCardInfo , MediumCardInfo } from "../types"
import Footer from '../components/Footer'




interface Props {

  exploreData : [ SmallCardInfo ]
  cardsData   : [ MediumCardInfo ]

}


const Home = ( { exploreData , cardsData } : Props ) => { 


   return <div className="">

              <Head>
                <title> Airbnb-Pet </title>
                <link rel="icon" href="/favicon.ico" />
              </Head>

              {/* Header */}
              <Header />

              {/* Banner */}
              <Banner/>

              <main className="max-w-7xl mx-auto px-8 sm:px-16">

                 { /* Small Card */ }
                 <section className="pt-6">

                    <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>

                    { /* Pull some data from a server - API endpoints */ }
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                   
                       {  exploreData?.map( ( item , num ) => <SmallCard key={ num } { ...item } /> )  }

                    </div>

                 </section>

                 { /* Medium Card */ }
                 <section>

                   <h2 className="text-4xl font-semibold py-8"> Live Anywhere </h2>

                   { /* Pull some data from a server - API endpoints */ } 
                   <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                      {  cardsData?.map( ( item , num ) => <MediumCard key={ num } { ...item } /> )  } 
                   </div>

                 </section>

                 { /* Large Card */ }
                 <section>
 
                    <LargeCard img         = "https://links.papareact.com/4cj"
                               title       = "The Greatest Outdoors"
                               description = "Whishlists curated by airbnb"
                               buttonText  = "Get Inspired"
                    />

                 </section>

                

              </main>

              { /* Footer */ }
                 <Footer />

         </div>

}

export default Home



export async function getStaticProps(){

   const exploreData = await fetch( "https://links.papareact.com/pyp" )
                             .then( res => res.json()  ) ;
                   
   const cardsData   = await fetch( "https://links.papareact.com/zp1" )
                             .then( res => res.json() ) ;      
   
  


   return {
            props :{
                     exploreData , 
                     cardsData     
                   }

          }

}
