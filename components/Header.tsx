import Image from "next/image";
import { useState } from "react";

import { 
         SearchIcon ,
         GlobeAltIcon ,
         MenuIcon ,
         UserIcon ,
         UserCircleIcon
        } from "@heroicons/react/solid"


// React Date Range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range" ;
import { useRouter } from "next/router";



const Header = () => {

    const [ searchInput , set_SearchInput ] = useState( "" ) ;
    const [ startDate , set_StartDate ]     = useState( new Date ) ;
    const [ endDate , set_EndDate ]         = useState( new Date ) ;
    const [ noOfGuests , set_NoOfGuests ]   = useState( 1 ) ;
    
    const router = useRouter();



    const selectionRange = { 
                             startDate : startDate ,
                             endDate   : endDate ,
                             key       : "Selection"
                           } ;



    // 日曆 _ 選擇日期                       
    const handleSelect = ( ranges : any ) => {
    
      set_StartDate(  ranges.Selection.startDate ) ;
      set_EndDate(  ranges.Selection.endDate ) ;
    
    } ;                       

    // 點選 _ 搜尋
    const search = () => {
    
        router.push( {
                        pathname : "/search" ,
                        query    : {
                                      location   : searchInput ,  
                                      startDate  : startDate.toISOString() ,  // 需將 Date 類型，轉為字串
                                      endDate    : endDate.toISOString() ,    // 需將 Date 類型，轉為字串
                                      noOfGuests : noOfGuests  
                                    }

                      } )
    
    } ;


    return <header className="sticky top-0 z-50 grid grid-cols-3 
                            bg-white shadow-md p-5 md:px-10">
                
              { /* Left : logo */ }
                <div className="relative flex items-center h-10
                               cursor-pointer my-auto"
                     onClick={ () => router.push("/") } >

                    <Image src="https://links.papareact.com/qd3" 
                           layout="fill"
                           objectFit="contain"
                           objectPosition="left"
                    />

                </div>

              { /* Middle : search */ }
                <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

                     <input className   = "flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
                            type        = "text"
                            value       = { searchInput } 
                            onChange    = { e => set_SearchInput( e.target.value ) }
                            placeholder = "Start your search..."  />

                     <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white 
                                            rounded-full p-2 cursor-pointer md:mx-2" />
                </div>

              { /* Right */ }  
                <div className="flex items-center space-x-4 justify-end text-gray-500">

                   <p className="hidden md:inline cursor-pointer">  Become a host </p>    
 
                   <GlobeAltIcon className="h-6 cursor-pointer"/>
      
                   <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                       <MenuIcon className="h-6"/> 
                       <UserCircleIcon className="h-6"/>
                   </div> 

                </div>

                { searchInput && <div className="flex flex-col col-span-3 mx-auto">

                                      <DateRangePicker ranges       = {[ selectionRange ]}  
                                                        minDate     = { new Date }
                                                        rangeColors = { [ "#FD5B61" ] }
                                                        onChange    = { handleSelect }
                                      />

                                      <div className = "flex items-center border-b mb-4">

                                           <h2 className = "text-2xl flex-grow font-semibold">
                                              Number of Guests 
                                           </h2>

                                           <UserIcon className = "h-5"/>

                                           <input type      = "number" 
                                                  className = "w-12 p-2 text-lg outline-none text-red-400"
                                                  value     = { noOfGuests } 
                                                  min       = { 1 }
                                                  onChange  = { e => set_NoOfGuests( parseInt( e.target.value) ) }
                                           />

                                      </div>

                                      <div className="flex">
                                         <button onClick = { () => set_SearchInput("") } className="flex-grow text-gray-500"> Cancel </button>
                                         <button className="flex-grow text-red-400" onClick={ () => search() }> Search </button>
                                      </div>

                                 </div> 
                
                
                }


           </header>


} ;

export default Header
       