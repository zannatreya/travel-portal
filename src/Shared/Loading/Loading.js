import React from "react";
import LoadingImg from "../../images/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-[75vh]">
      <section>
        <img src={LoadingImg} alt="" />
      </section>
    </div>
  );
};

export default Loading;
