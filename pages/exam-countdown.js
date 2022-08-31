import Link from "next/dist/client/link";
import Timer from "../components/Timer";
import date from "../data/exam-date.json"

function ExamCountdown() {
  
    const Date = date;
    const property = Object.keys(Date);
    const propertyValues = Object.values(Date);

    console.log(property);

    console.log(propertyValues);


  return (
    <div className="page">
      <h1 className="page-heading">Exam Countdown</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Exam Countdown</li>

        
      </ul>

        <h3>Design will be improved soon</h3>
          
        {property.map((value, index) => (
            <div key={index}>
              {value}
              {/* <span>{propertyValues[index].date}</span> */}
              <Timer date={propertyValues[index].date} />
            </div>
          ))}
            
         

         
    </div>
  );
}

export default ExamCountdown;
