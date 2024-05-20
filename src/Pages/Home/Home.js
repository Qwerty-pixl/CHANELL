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
            <h1 className="title">Мир Ароматов Chanel</h1>
          </div>
          {/* Дополнительные элементы навигации или функциональные элементы */}
        </nav>
      </div>
      

    <div className="AboutChanel">
      <p className="MyChanel"> Discover the Essence of Elegance with Chanel
Welcome to the world of Chanel, where timeless elegance meets modern sophistication. Immerse yourself in our exquisite collection of fragrances that embody the spirit of luxury and refinement.<p/>

<p className="MyChanel"> Iconic Fragrances
Explore our legendary fragrances that have become synonymous with style and grace. From the timeless allure of Chanel No. 5 to the fresh and vibrant notes of Chance, each scent is a masterpiece crafted with the finest ingredients.<p/>

<p className="MyChanel">Exclusive Collections
Indulge in our exclusive collections, designed for those who seek the extraordinary. Whether you're looking for a signature scent or a special gift, our limited-edition fragrances offer an unparalleled experience of luxury and exclusivity.<p/>

<p className="MyChanel">The Art of Perfumery
At Chanel, we believe in the art of perfumery. Our expert perfumers combine traditional techniques with innovative processes to create scents that are both classic and contemporary. Discover the story behind each fragrance and the inspiration that brings it to life.</p>
    </div>

    </>
  )
}

export default Home;
