import React from "react";

const PageHeader = (props) => {
  return (
    <div class="page-header mb-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>{props.title}</h2>
          </div>
          <div class="col-12">
            <a href="/">Home</a>
            <a href="">{props.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
