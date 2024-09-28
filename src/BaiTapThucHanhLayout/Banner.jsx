import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="container my-5 p-5 bg-light">
        <div className="p-5 d-flex flex-column align-items-center">
          <h1 className="fw-bold">A warm welcome!</h1>
          <p className="fs-4 text-center">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary fs-5 py-2">Call to action</button>
        </div>
      </div>
    </div>
  );
}
