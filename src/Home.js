import ninas from "./img/ninas-portada.jpg";

const Home = () => {
  return (
    <>
      <h1 className="pt-3">Festivla japones</h1>
      <img className="ninas pb-3 pt-3" alt="ninas" src={ninas} />
      <p>
        La exposición Japón una historia de amor y guerra recorre en 11
        secciones la vida y cultura japonesas desde el <b>periodo Edo</b>{" "}
        (1603-1868) hasta el siglo XX, a través de estampas de algunos de los
        autores más representativos, kimonos, abanicos y fotografías.
      </p>
      <p>
        Tendrá lugar en Valdelaguna desde el 20 de abril hasta el 24 de abril
        2022.
      </p>
      <p>
        La muestra está producida y organizada por Evolucionarte y comisariada
        por Pietro Gobbi y Enzo Bartolone, grandes estudiosos y coleccionistas
        del arte japonés.
      </p>
      <p>
        Aquí encontraras varios restaurantes con comida tradicional Asiatica y
        exposiciones de varios artistas y objetos de colección.
      </p>
    </>
  );
};

export default Home;
