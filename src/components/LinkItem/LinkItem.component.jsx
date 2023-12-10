import "./LinkItem.styles.scss";

const LinkItem = ({linkItem, social}) => {
  const { icon, url } = linkItem;

  return(
    <a href={url} target="_blank" rel="noopener noreferrer" className="in-line">
      <div className={social ? "social-icon" : "stack-icon"}>
        {icon}
      </div>
    </a>
  );
}

export default LinkItem;