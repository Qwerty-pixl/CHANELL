import Title from '../../Components/Title/Title';
import './About.css';
// import aboutImg from '../../img/gabrr.jpg'

function About() {
  return (
    <section className="About">
      <Title>WHO ARE WE ?</Title>
      <div className="About_in flex">
        {/* <div className="About_img img_wrap">
          <img src={aboutImg} alt="" />
        </div> */}
        <div className="About_txt">
          <h3 className='About_tit'>Perfume says more about a woman than her handwriting</h3>
          <p>
            <b> “Perfume is an invisible, but unforgettable, unrivaled fashion accessory. It notifies you of a woman’s appearance and continues to remind you of her when she’s gone...” </b>
          </p>
        </div>
      </div>
      <div className="About_bot">
      
      </div>
    </section>
  );
}

export default About;