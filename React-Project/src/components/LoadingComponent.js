import React from "react";

const LoadingComponent = () => {
  return (
    <div className="col-12">
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
        <p className="text-primary">Loading...</p>
    </div>
  )
}

export default LoadingComponent
