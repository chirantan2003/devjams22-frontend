const Introducing = (props) => {
  return (
    <div className="outer">
      <p>Introducing</p>
      <style jsx>{`
        .outer {
          background-color: ${props.color};
          border: 1px solid black;
          border-radius: 94px;
          font-size: 0.8rem;
          font-weight: bold;
          line-height: 0.1rem;
          height: fit-content;
          width: fit-content;
          padding: 0 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Introducing;
