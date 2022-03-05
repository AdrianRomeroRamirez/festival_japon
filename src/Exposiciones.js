import japon1 from "./img/japon1.jpg";
import japon2 from "./img/japon2.jpg";

const Exposiciones = () => {
  return (
    <>
      <h1 className="pt-3">Exposiciones</h1>
      <h2>Cómo es la exposición </h2>
      <h3>Entrada gratuita</h3>
      <p>
        A través de una selección de <b>más de 40 obras</b>, el mundo flotante
        del ukiyo-e llega por primera vez a Madrid de la mano de{" "}
        <b>dos de las colecciones más prestigiosas del mundo</b>, un verdadero
        viaje para descubrir la atmósfera elegante y refinada del país nipón.
      </p>
      <img className="restaurantes pb-3 pt-3" alt="japon1" src={japon1} />
      <p>
        Además de estar presentes los <b>artistas japoneses más prestigiosos</b>{" "}
        de la época como Hiroshige, Utamaro, Hokusai o Kuniyoshi, la exposición
        ofrece un panorama completo sobre la <b>vida japonesa del siglo XIX</b>,
        a través de la exhibición de armaduras samuráis, kimonos, abanicos y
        fotografías. El recorrido desarrollado a través de 5 secciones serpentea
        entre el persuasivo mundo femenino de las <b>geishas</b>, la leyenda de
        los fieles
        <b>guerreros samuráis</b>, sin dejar atrás, la historia del nacimiento
        del ukiyo-e y de los famosos estampados shunga, ricos en erotismo.
      </p>
      <img className="restaurantes pb-3 pt-3" alt="japon2" src={japon2} />
    </>
  );
};

export default Exposiciones;
