import Card from "../UI/card";

function Trainer({ image, name, job, socials }) {
  const socialsArray = socials.map(({ icon, link }, index) => {
    return (
      <a href={link} key={index} target="_black" rel="noreffer noopener">
        {icon}
      </a>
    );
  });
  return (
    <div>
      <Card className="trainer">
        <div className="trainer--img">
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer--socials">{socialsArray}</div>
      </Card>
    </div>
  );
}
export default Trainer;
