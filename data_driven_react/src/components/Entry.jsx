import japan from "../assets/img/japan.png";

function Entry() {
  return (
    <>
      <article>
        <div className="entry_item">
          <img src={japan} alt="Picture of Mount Fuji" />
          <div className="content">
            <div className="row">
              <h2>Japan</h2>
              <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                View on Google Maps
              </a>
            </div>
            <h3>Mount Fuji</h3>
            <br />
            <small>
              <b>12 jan, 2023 - 24 jan, 2023</b>
            </small>

            <p>
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </article>
      <hr />
    </>
  );
}

export default Entry;
