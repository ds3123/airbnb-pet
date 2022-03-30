import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";



const Search = () => {

    // 接收傳送過來的 url 參數
    const router = useRouter() ;

    const { location , startDate , endDate , noOfGuests } = router.query ;


    const formatted_StartDate = format( new Date( startDate as string ) , "dd MMMM yy" ) ;
    const formatted_EndDate   = format( new Date( endDate as string ) , "dd MMMM yy" ) ;

    const range = `${ formatted_StartDate } - ${ formatted_EndDate }` ;


    return <div> 

              <Header />

              <main className="flex">

                  <section className="flex-grow pt-14 px-6">
                      <p className="text-xs"> 300+ Stays - { range } - for { noOfGuests } guests</p> 
                      <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in { location } </h1>      
 
                      <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">

                         <p className="button"> Cancellation Flexibility </p>
                         <p className="button"> Types of Place  </p>
                         <p className="button"> Prices  </p>
                         <p className="button"> Rooms and Beds  </p>
                         <p className="button"> More FIlters ...  </p>

                      </div>
                 

                  </section>



              </main>


              <Footer />


           </div>

     

} ;

export default Search
       