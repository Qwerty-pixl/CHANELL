import Title from '../../Components/Title/Title';
import './About.css';
import aboutImg from '../../img/gabrr.jpg'

function About() {
  return (
    <section className="About">
      <Title>WHO ARE WE ?</Title>
      <div className="About_in flex">
        <div className="About_img img_wrap">
          <img src={aboutImg} alt="" />
        </div>
        <div className="About_txt">
          <h3 className='About_tit'>Perfume says more about a woman than her handwriting</h3>
          <p>
            <b> “Perfume is an invisible, but unforgettable, unrivaled fashion accessory. It notifies you of a woman’s appearance and continues to remind you of her when she’s gone...” </b>
          </p>
        </div>
      </div>
      <div className="About_bot">
        <p>The House of Chanel originated in 1909, when Gabrielle Chanel opened a millinery shop at 160 Boulevard Malesherbes, the ground floor of the Parisian flat of the socialite and textile businessman Étienne Balsan, of whom she was the mistress. Because the Balsan flat also was a salon for the French hunting and sporting élite, Chanel had the opportunity to meet their demi-mondaine mistresses who, as such, were women of fashion, upon whom the rich men displayed their wealth – as ornate clothes, jewellery, and hats.


The actress Gabrielle Dorziat wearing a Chanel plumed hat 
Coco Chanel thus could sell to them the hats she designed and made; she thus earned a living independent of Balsan. In the course of those salons, Coco Chanel befriended Arthur "Boy" Capel, an English socialite and polo player friend of Étienne Balsan; per the upper class social custom, Chanel also became mistress to Boy Capel. In 1910, Boy Capel financed her first independent millinery shop, Chanel Modes, at 21 rue Cambon in Paris. Because that locale already housed a dress shop, the business-lease limited Chanel to selling only millinery products, not couture. Two years later 1913, the Deauville and Biarritz couture shops of Coco Chanel offered for sale prêt-à-porter sports clothes for women, the practical designs of which allowed the wearer to play sports.</p>
      </div>
    </section>
  );
}

export default About;