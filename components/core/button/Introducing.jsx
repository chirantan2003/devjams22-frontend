const Introducing = (props) => {
  return (
    <div className="outer">
      <p>Introducing</p>
      <style jsx>
        {`
          .outer {
            background-color: ${props.color};
            border: 1px solid black;
            border-radius: 94px;
            font-size: 0.75rem;
            font-weight: bold;
            line-height: 0.03rem;
            height: fit-content;
            width: fit-content;
            padding: 0 0.7rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Introducing;
