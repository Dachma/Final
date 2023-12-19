/* eslint-disable react/prop-types */
const Universities = (props) => {
  return (
    <div className="uni-page">
      <h1 className="uni-header">
        {props.selectedCountry
          ? `Universities of ${props.selectedCountry.value}`
          : ""}
      </h1>
      <div className="uni-container">
        {props.uniList.map((el, index) => {
          return (
            <div className="uni-info" key={index}>
              <h3 className="uni-name">{el.name}</h3>
              <div>Visit the website ↓</div>
              <a
                className="link"
                rel="noreferrer"
                target="_blank"
                href={el.web_pages[0]}
              >
                {el.web_pages[0]}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Universities;
