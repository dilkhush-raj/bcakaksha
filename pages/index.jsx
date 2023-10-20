import Link from "next/link";
import { SemesterBags } from "../data/routes";
// import Noticeboard from "../components/Noticeboard";

export default function Home() {
  return (
    <div className="bg-[#ddd] ">
      <h1 className="page-heading font-bold text-center bg-white ">
        IGNOU की BCA कक्षा
      </h1>
      <div className=" mx-auto ">
        <div className="h-[150px] sm:h-[200px] md:h-[300px] rounded-md m-2 sm:m-4 banner shadow-md border-4 bg-slate-100 border-white relative"></div>
        {/* Semester Bags */}
        <div className="sm:flex gap-2 sm:gap-4 m-2 sm:m-4 grid ">
          <div className="flex  row-start-2 flex-col flex-wrap gap-4 justify-center max-w-[500px] shadow-md border-4 bg-slate-100 border-white rounded-md">
            <h2 className="font-bold text-xl text-center p-2 border-b-4 border-gray-300 ">
              Semesters
            </h2>
            <div className="flex flex-wrap gap-4 p-2 justify-center">
              {SemesterBags.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    <img
                      src={"/images/" + item.img + ".svg"}
                      alt={item.path}
                      className="cursor-pointer w-[120px]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <Noticeboard /> */}
        </div>
      </div>
    </div>
  );
}
