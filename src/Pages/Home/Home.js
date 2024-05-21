import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Photo from '../../img/model.jpg'



function Home() {
  return (
    
    <>
    <Link to="/" >
      <img  src={Photo} alt="" />
    </Link>


      
      <div className="Home_slider">
        <Swiper 
          spaceBetween={10} 
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          autoplay={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/eau-de-cologne-les-exclusifs-de-chanel-eau-de-toilette-6-8fl-oz--packshot-default-101565-9536679411742.jpg"
                alt=""
              />
             
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.sephora.com/productimages/sku/s2170686-main-zoom.jpg"
                alt=""
              />
              
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9539149398046.jpg"
                alt=""
              />
             
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920//comete-les-exclusifs-de-chanel-eau-de-parfum-spray-6-8fl-oz--packshot-default-122560-9539824091166.jpg"
                alt=""
              />
              
            </Link>
          </SwiperSlide>


        <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_620/eau-de-cologne-les-exclusifs-de-chanel-eau-de-toilette-6-8fl-oz--packshot-default-101565-9536679411742.jpg"
                alt=""
              />
             
            </Link>
          </SwiperSlide>




          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://www.sephora.com/productimages/sku/s2170686-main-zoom.jpg"
                alt=""
              />
              
            </Link>
          </SwiperSlide>
          </Swiper>


        
      </div>



      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1 className="title">World of CHANEL fragrances</h1>
          </div>
          {/* Дополнительные элементы навигации или функциональные элементы */}
        </nav>

      </div>
      <div>

      </div>
<p className="chanel">While Chanel found immense success as a designer, the financial basis of her empire was Chanel No. 5. She developed the phenomenally successful perfume in 1921 with the help of Ernest Beaux, one of the most talented perfume creators in France. It has been said that the perfume got its name from the series of scents that Beaux created for Chanel to sample—she chose the fifth, a combination of jasmine and several other floral scents that was more complex and mysterious than the single-scented perfumes then on the market. Others, however, have noted that Chanel was superstitious and considered five to be her lucky number. That Chanel was the first major fashion designer to introduce a perfume and that she replaced the typical perfume packaging with a simple and sleek bottle also added to the scent’s success. The bottle’s top featured interlocking Cs, which later became the Chanel brand’s insignia.</p>
    </>
  )
}

export default Home;
