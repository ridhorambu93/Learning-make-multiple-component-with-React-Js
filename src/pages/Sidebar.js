import React, { Component } from "react";

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Header Image One</h2>
                <h5>name picture one</h5>
                <div className="fakeimg" style={{ height: 200 }}>Image</div>
                <p>Detail Image Tester</p>

                <h2 style={{ marginTop: 118 }}>Header Image Two</h2>
                <p>name picture two</p>
                <div className="fakeimg" style={{ height: 90 }}>Image</div><br/>
                <div className="fakeimg" style={{ height: 90 }}>Image</div>
            </div>
        );
    }
}

export default Sidebar