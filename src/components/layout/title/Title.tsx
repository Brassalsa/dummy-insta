const Title = ({ title = "Dummy Insta", className = "flex-1 text-2xl " }) => {
  return <h1 className={className}>{title}</h1>;
};

export default Title;
