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
        <p>Chanel specializes in women's ready-to-wear, luxury goods, and accessories and licenses its name and branding to Luxottica for eyewear.[3][4] Chanel is well known for its No. 5 perfume and "Chanel Suit".[5] Chanel is credited for revolutionizing haute couture and ready-to-wear by replacing structured, corseted silhouettes with more functional garments that women still found flattering.[6]</p>
        <p>After the First World War, La Maison Chanel, following the fashion trends of the 1920s, produced beaded dresses made popular by Flapper women.[4] The simple-line, 'flat-chested' fashions Chanel couture made popular were opposite of the hourglass figure fashions of the late 19th century – the Belle Époque of France (c. 1890–1914), and the British Edwardian era (c. 1901–1919). Chanel used colors traditionally associated with masculinity in Europe, such as grey and navy blue, to denote feminine boldness.[6][8] Chanel clothing often featured quilted fabric and leather trimmings; the quilted construction reinforced the fabric, design, and finish, allowing the garment to maintain its form and function while worn. An example is the woolen Chanel suit – a knee-length skirt and a cardigan-style jacket, trimmed and decorated with black embroidery and gold-coloured buttons, often accessorized with two-tone pump shoes, a necklace of pearls, and a leather handbag.[4][6][9]

In 1921, to complement Chanel's clothing lines, Coco Chanel commissioned perfumer Ernest Beaux to create a perfume for La Maison Chanel. His perfumes included the perfume No.5, named after the number of the sample Chanel liked best. Originally, given as a gift to clients, No.5's popularity prompted La Maison Chanel to offer it for sale in 1922.</p>
        <p>The success of the No. 5 encouraged Coco Chanel to expand perfume sales beyond France and Europe and to develop other perfumes – for which she required investment capital, business acumen, and access to the North American market. To that end, the businessman Théophile Bader (founder of Galeries Lafayette) introduced the venture capitalist Pierre Wertheimer to Coco Chanel. Their business deal established the Parfums Chanel company, a parfumerie of which Wertheimer owned 70 per cent, Bader owned 20 per cent, and Chanel owned 10 per cent; commercial success of the joint enterprise was assured by the Chanel name, and by the cachet of la "Maison Chanel", which remained the sole business province of Coco Chanel.[9]

Nonetheless, despite the success of the Chanel couture and parfumerie, the personal relations between Coco and her capitalist partner deteriorated, because, Coco said that Pierre Wertheimer was exploiting her talents as a fashion designer and as a businesswoman.[9] Wertheimer reminded Chanel that he had made her a very rich woman; and that his venture capital had funded Chanel's productive expansion of the parfumerie which created the wealth they enjoyed, all from the success of No. 5 de Chanel.</p>
        <p>From the gamine fashions of the 1920s, Coco Chanel progressed to womanly fashions in the 1930s: evening-dress designs were characterised by an elongated feminine style, and summer dresses featured contrasts such as silver eyelets, and shoulder straps decorated with rhinestones – drawing from Renaissance-time fashion stylings. In 1932, Chanel presented an exhibition of jewellery dedicated to the diamond as a fashion accessory; it featured the Comet and Fountain necklaces of diamonds, which were of such original design, that Chanel S.A. re-presented them in 1993. Moreover, by 1937, the House of Chanel had expanded the range of its clothes to more women and presented prêt-à-porter clothes designed and cut for the petite woman.[4] Among fashion designers, only the clothes created by Elsa Schiaparelli could compete with the clothes of Chanel.[4]</p>
      </div>
    </section>
  );
}

export default Delivery;