import React, { Component } from 'react'

export default class FamilyDisplayComponent extends Component {
  render() {
    return (
      <div className="Family">
        <div className="FamilyName">The {this.props.FamilyName} Family</div>
        <div className="FamilyStatement">{this.props.FamilyStatement}</div>
      </div>
    )
  }
}
