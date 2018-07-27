import React, { Component } from 'react';
import styled from 'styled-components';

export default class ScoreTile extends Component {

  render() {
    return(
      <TileWrapper>
        <ScoreDis>{this.props.strokes}</ScoreDis>
        <Course>{this.props.course}</Course>
        <Date>3/15</Date>
      </TileWrapper>
    );
  }
}

const TileWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1px;
  height: 33%;
  font-weight: normal;
  background-color: #eee;
`;
const ScoreDis = styled.div`
  font-size: 35px;
  padding-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Course = styled.div`
  padding-top: 15px;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;
const Date = styled.div`
  padding-top: 10px;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;
