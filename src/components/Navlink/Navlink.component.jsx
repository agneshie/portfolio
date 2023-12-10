import "./Navlink.styles.scss";

const Navlink = ({navlink}) => {
  const { title, url } = navlink;

  return(
    <a href={url} rel="noopener noreferrer" className="nav-link" >
      {title}
    </a>
  );
}

export default Navlink;