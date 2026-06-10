import MaskotAksarama from "../assets/MaskotAksarama.png";

const HeroBoxComponent = () => {
  return (
    <div className="hero-box">

      <img
        src={MaskotAksarama}
        alt=""
        className="maskot"
      />

      <div className="hero-content">

        <div className="hero-text">
          Pilih tahapan
          petualanganmu
        </div>

        <div className="hero-text">
          lalu mulai
          perjalananmu
        </div>

      </div>

    </div>
  );
};

export default HeroBoxComponent;


// export const HeroBoxComponent = () => {
//     return (
//         <div className="hero-box">
//             <div className="hero-text">
//                 Pilih tahapan
//                 petualanganmu
//             </div>

//             <div className="hero-text right">
//                 lalu mulai
//                 perjalananmu
//             </div>
//         </div>
//     );
// }