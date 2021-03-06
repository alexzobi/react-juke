import React from 'react';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="col-xs-2">
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a onClick={this.props.reset} href="#">ALBUMS</a>
            </h4>
          </section>
        </sidebar>
      </div>
    )
  }
}
