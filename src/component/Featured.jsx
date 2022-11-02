import D from "../asset/D.jpg";

import E from "../asset/E.jpg";

import F from "../asset/F.jpg";
import Item from "./Item";
function Featured() {
  return (
    <section className="container mx-auto lg:px-8 h-fit md:h-[400px] lg:h-[550px] py-20 ">
      <div className="flex md:flex-row flex-col gap-4 justify-center ">
        <div className="relative w-3/4 md:w-1/4 ">
          <Item image={D} />
        </div>
        <div className="relative  w-3/4 md:w-1/4  ">
          <Item image={E} />
        </div>
        <div className="relative  w-3/4 md:w-1/4  ">
          <Item image={F} />
        </div>
      </div>
    </section>
  );
}
export default Featured;
