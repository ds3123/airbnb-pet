
import { SearchInfo } from "../types" ;
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";




const InfoCard = ( { img , location , title , description , star , price , total , long , lat } : SearchInfo ) => {

    return <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
                           transition duration-200 ease-out first:border-t">

             { /* 左側圖片 */ }
             <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">  
                 <Image src = { img } layout = "fill" objectFit="cover" className="rounded-2xl" />
             </div> 

             { /* 右側文字 */ }
             <div className="flex flex-col flex-grow p-5 ">

                   <div className="flex justify-between">
                        <p>{location}</p>
                        <HeartIcon className="h-7 cursor-pointer" />
                   </div> 

                   <h4 className="text-xl">{ title }</h4>
                   
                   <div className="border-b w-10 pt-2" />

                   <p className="pt-2 text-sm text-gray-500"> { description } </p>
             
                   <div className="flex justify-between pt-5">

                        <p className="flex items-center"> <StarIcon className="h-5 text-red-400"/> { star } </p>

                        <div>
                           <p className="text-lg lg:text-2xl font-semibold pb-2"> { price } </p>
                           <p className="text-right font-extralight"> { total } </p>
                        </div>  

                   </div>

                   

             </div>

          </div>

} ;

export default InfoCard
       