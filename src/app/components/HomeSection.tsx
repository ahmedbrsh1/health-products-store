const HomeSection: React.FC<{ title?: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <>
      <div className="container mx-auto mt-40">
        {props.title && <h2 className="text-center mb-12">{props.title}</h2>}
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default HomeSection;
