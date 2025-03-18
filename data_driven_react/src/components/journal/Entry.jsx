
function Entry(props) {
  console.log(props)
  return (
    <>
      <article>
        <div className="entry_item">
          <img src={props.img.src} alt={props.img.alt} />
          <div className="content">
            <div className="row">
              <h2>{props.country}</h2>
              <a href={props.googleMapsLink}>
                View on Google Maps
              </a>
            </div>
            <h3>{props.name}</h3>
            <br />
            <small>
              <b>{props.dates}</b>
            </small>

            <p>
            {props.text}
            </p>
          </div>
        </div>
      </article>
      <hr />
    </>
  );
}

export default Entry;
