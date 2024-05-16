import './Delivery.css';
import Title from '../../Components/Title/Title';
import video from '../../img/perfume.mp4'

function Delivery() {
  return (
    <section className="Delivery">
      <Title>Delivery</Title>
      <div className="Delivery_video">
      <video width="100%" height="auto" controls autoPlay muted>
        <source src={video} type="perfume/mp4" />
      </video>
      </div>
      <div className="Delivery_txt">
        

      </div>
    </section>
  );
}

export default Delivery;