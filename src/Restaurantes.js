import restaurante1 from "./img/1.webp";
import restaurante2 from "./img/2.webp";

const Restaurantes = () => {
  return (
    <>
      <h1 className="pt-3">Restaurantes</h1>
      <img
        className="restaurantes pb-3 pt-3"
        alt="restaurante1"
        src={restaurante1}
      />
      <p>
        Un{" "}
        <i>
          <b>yatai</b>
        </i>{" "}
        -su nombre literalmente significa estand de tienda- es{" "}
        <b>
          un puesto pequeño y móvil de comida en Japón, en el que se vende ramen{" "}
        </b>
        u otro tipo de street food. Se instala por la tarde en las calles
        peatonales y se retira por la noche o en las primeras horas de la
        madrugada. Yatai es también el nombre del popular mercado de
        falsificaciones en{" "}
        <b>
          <i>Shanghái</i>
        </b>
        , el más grande de Asia, pero cuidado, en cada uno de los cinco puestos
        (faltan otros cinco por abrir) de la versión madrileña no encontrarás
        ninguna imitación. Todo es auténtico, sólo hay sitio para la fusión.
      </p>
      <img
        className="restaurantes pb-3 pt-3"
        alt="restaurante2"
        src={restaurante2}
      />
      <p>
        El puesto donde se{" "}
        <b>fusiona la gastronomía asiática con la española</b>, se llama Asia
        Cañí (el único con tenedores, por si no te llevas muy bien con los
        palillos) y ofrece diferentes propuestas que “irán cambiando en función
        de la temporada”, en palabras de su gerente, David Delgado, quien
        también gestiona Dt Tapas y Granja de Malasaña en el Mercado de San
        Ildefonso. Para esta estación David ha diseñado{" "}
        <b>
          cuatro platos de curry con varios puntos de picante y cuatro tipos de
          rolls de lechuga, muy típicos en Vietnam
        </b>
        . Por su sabor y originalidad, destacamos el roll de torreznos con
        mejillones en escabeche, mayonesa de ajo negro y hierbas thais; y el de
        poke hawaiano de salmón, arroz basmati y cebolla. Quédate con la palabra
        poke, porque David nos ha asegurado que este tipo de ceviche va a sonar
        mucho en los próximos meses.
      </p>
    </>
  );
};

export default Restaurantes;
