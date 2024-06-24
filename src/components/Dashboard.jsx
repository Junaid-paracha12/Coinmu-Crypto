import React from "react";

const Dashboard = ({ dashboard: { imgsrc, content } }) => {
  return (
    <>
      <div className="app-container">
        <div>
          <img src={imgsrc} alt="img" className="rounded-xl" />
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-7 justify-between sm:justify-center">
          {content?.map((v, i) => (
            <div key={i} className="">
              <div className="flex items-center gap-2 py-4 ">
                {" "}
                <img
                  src={v.iconsrc}
                  alt="icon"
                  className=" bg-emerald-500 w-5 rounded-full p-1"
                />
                <p className="  text-slate-300/70 text-xs py-2 w-60">
                  {v.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
