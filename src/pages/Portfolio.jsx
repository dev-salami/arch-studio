import Footer from "../component/Footer";
import seraph from "../asset/Car-3.jpg";
import eebrox from "../asset/eebrox.jpg";
import federal from "../asset/Car-1.jpg";
import sol from "../asset/D.jpg";
import Prototype from "../asset/F.jpg";
import Btower from "../asset/E.jpg";
import grand from "../asset/hotel.jpg";
import Nectry from "../asset/nectral.jpg";
import hypers from "../asset/hypers.jpg";
import siv from "../asset/siv.jpg";
import trinity from "../asset/Car-2.jpg";
import paramout from "../asset/A.jpg";
import { useState } from "react";
import Item from "../component/Item";

function Portfolio() {
  const [More, setMore] = useState(false);
  return (
    <div>
      <section className="mx-12 mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Item image={seraph} text="Seraph Station" date="September 2019" />
        <Item image={eebrox} text="Eebox Building" date="August 2017" />

        <Item image={federal} text="Federal II Tower" date="March 2017" />

        <Item image={sol} text="Project Del Sol" date="January 2016" />

        <Item image={Prototype} text="Le Prototype" date="October 2015" />
        <Item image={Btower} text="228B" date="April 2015" />

        {More && (
          <>
            <Item image={Nectry} text="Nectry Tower" date="August 2012" />
            <Item image={grand} text="Grand Edelweiss" date="December 2013" />

            <Item image={hypers} text="Hypers" date="January 2012" />
            <Item image={siv} text="SXIV Tower" date="March 2011" />
            <Item
              image={trinity}
              text="Trinity Bank Tower"
              date="September 2010"
            />
            <Item
              image={paramout}
              text="Project Paramour"
              date="February 2008"
            />
          </>
        )}
      </section>
      <button
        className="px-6 py-3 text-2xl font-semibold bg-black text-white w-fit mx-auto  mt-6 flex justify-center"
        onClick={() => {
          setMore(!More);
        }}
      >
        {More ? "Show less" : "Show more"}
      </button>
      <Footer />
    </div>
  );
}
Portfolio.defaultProps = {
  btn: false,
  date: null,
};
export default Portfolio;
