import Link from "next/link";
import Image from "next/image";
import Login from "../components/Login";

export default function Home() {
  return (
    <>
      <h1 className="page-heading font-bold text-center">IGNOU की BCA कक्षा</h1>
      <div className="max-w-[1000px] mx-auto">
        <div className="h-[200px] rounded-md m-2 sm:m-4 bg-[#47c] hero relative">
          <h2 className="font-bold p-4 text-center text-3xl text-[#111]">
            Welcome
          </h2>
          <div className="absolute top-[5px] right-[15px]">
            <Login login={"Login"} logout={"Logout"} />
          </div>
        </div>
        <div className="m-2 sm:m-4 bg-[#ccf] h-[40px] flex-wrap items-center justify-center flex gap-3 rounded-md">
          {Category.map((c, index) => {
            return (
              <Link key={index} href={c.path}>
                <img
                  src={"/images/" + c.img}
                  className="h-[90%] cursor-pointer"
                />
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 m-2 sm:m-4">
          <div className="h-[200px] bg-[#9db8f1] p-2 overflow-auto  rounded-md">
            <h2 className="text-center font-bold text-xl">Notice Board</h2>
            <div className="flex flex-col gap-3">
              <p>
                Welcome to our website, currently in beta version. Some features
                may not work as expected as we continue to improve the user
                experience. We are working hard to ensure all features are fully
                functional and stable soon. Thank you for your patience and
                understanding.
              </p>
              <p>
                Explore the website and take advantage of available features.
                Please reach out to us if you have any feedback or encounter any
                issues.
              </p>
              <p>Best regards,</p>
              <p>Dilkhush Raj</p>
            </div>
          </div>

          <div className=" bg-[#9db8f1] sm:max-h-[521px] overflow-auto sm:row-span-2 row-start-3  p-2 overflow-auto rounded-md">
            <h2 className="text-center font-bold text-xl">About the Website</h2>
            {/* <ul className="list-disc ml-6">
            <li>Contains All Books from Semester 1 to Semester 6</li>
          </ul> */}
            <div className="flex flex-col gap-4 py-2">
              <h1>Welcome to our website!</h1>
              <p>
                We're here to help IGNOU BCA students succeed in their studies.
                Our website provides a range of resources, including books in
                PDF format, assignments, and a grade calculator.{" "}
              </p>
              <p>
                You can access our comprehensive collection of books and
                assignments to help you prepare for exams and submit
                high-quality assignments. Our grade calculator tool will help
                you track your academic progress accurately.
              </p>
              <p>
                We're committed to regularly updating our website with new
                resources, so check back often to see what's new.
              </p>
              <p>
                Thank you for choosing our website as your go-to resource for
                IGNOU BCA studies. Let's help you achieve your academic goals
                together!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 p-4  bg-[#9db8f1]  rounded-md justify-center">
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
        <div className="bg-[#002] m-2 sm:m-4 rounded-md p-4 text-white text-center ">
          Empowering IGNOU BCA students with top-notch resources <br /> -
          Created, Designed, and Developed with ❤ by Dilkhush Raj.
        </div>
      </div>
    </>
  );
}

const SemesterBags = [
  {
    img: "bag1",
    path: "/semester1",
    className: "semester-bag",
  },
  {
    img: "bag2",
    path: "/semester2",
    className: "semester-bag",
  },
  {
    img: "bag3",
    path: "/semester3",
    className: "semester-bag",
  },
  {
    img: "bag4",
    path: "/semester4",
    className: "semester-bag",
  },
  {
    img: "bag5",
    path: "/semester5",
    className: "semester-bag",
  },
  {
    img: "bag6",
    path: "/semester6",
    className: "semester-bag",
  },
];

const Category = [
  {
    title: "Account",
    path: "/account",
    img: "user.svg",
  },
  {
    title: "Links",
    path: "/pages/links",
    img: "icons8-link.svg",
  },
  {
    title: "Blog",
    path: "/blog",
    img: "icons8-blog.svg",
  },
  {
    title: "Grade Calculator",
    path: "/grade-card",
    img: "icons8-exam.svg",
  },
  {
    title: "Contact",
    path: "/pages/contact",
    img: "icons8-feedback-hub.svg",
  },
];
