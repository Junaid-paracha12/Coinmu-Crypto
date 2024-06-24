import React from "react";

const Sponsers = ({ sponser }) => {
  return (
    <>
      <div className="app-container my-16">
        <div className="text-center py-3">
          <p className="text-slate-300 md:text-sm">
            Join 4000+ companies already growing
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 w-full overflow-x-scroll scroll-smooth scroll-hidden">
          {sponser?.map((v, i) => (
            <img key={i} src={v.iconsrc} alt="" className="w-40" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsers;
