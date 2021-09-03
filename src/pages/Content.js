import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="main">
        <h2>Article One</h2>
        <h5>Jakarta, 3 September, 2021</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>title article one</p>
        <p>
          Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus
          ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis
          varius quam quisque id diam vel quam elementum. Ornare aenean euismod
          elementum nisi quis eleifend quam.
        </p>
        <br />
        
        <h2>Article Two</h2>
        <h5>Jakarta, 4 September, 2021</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>title article two</p>
        <p>
          Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus
          ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis
          varius quam quisque id diam vel quam elementum.
        </p>
      </div>
    );
  }
}

export default Content;
