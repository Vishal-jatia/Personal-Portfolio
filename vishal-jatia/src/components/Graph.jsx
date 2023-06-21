import * as _ from "lodash";
import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  Tooltip,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { changeNumberOfData } from "./utils";
const data = [
  { subject: "HTML", A: 120, B: 110, C: [80, 120] },
  { subject: "CSS", A: 98, B: 130, C: [90, 113] },
  { subject: "Bootstrap", A: 86, B: 130, C: [70, 134] },
  { subject: "JavaScript", A: 100, B: 100, C: [88, 130] },
  { subject: "JQuery", A: 85, B: 90, C: [55, 110] },
  { subject: "Tailwind", A: 65, B: 85, C: [60, 120] },
  { subject: "NodeJs", A: 65, B: 85, C: [60, 120] },
  { subject: "ReactJs", A: 65, B: 85, C: [60, 120] },
  { subject: "NextJs", A: 65, B: 85, C: [60, 120] },
  { subject: "Figma", A: 65, B: 85, C: [60, 120] },
];
const initialState = { data };
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeData = this.handleChangeData.bind(this);
  }
  handleChangeData() {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  }
  handleMouseEnter(props) {
    console.log(props);
  }
  render() {
    const { data } = this.state;
    return React.createElement(
      "div",
      null,
      // React.createElement(
      //   "a",
      //   {
      //     href: "javascript: void(0);",
      //     className: "btn update",
      //     onClick: this.handleChangeData,
      //   },
      //   "change data"
      // ),
      React.createElement("br", null),
      // React.createElement("p", null, "A simple RadarChart"),
      React.createElement(
        RadarChart,
        {
          cx: 240,
          cy: 250,
          outerRadius: "50%",
          width: 500,
          height: 500,
          data: data,
        },
        React.createElement(PolarGrid, { radialLines: true }),
        React.createElement(PolarAngleAxis, { dataKey: "subject" }),
        React.createElement(Radar, {
          dataKey: "A",
          stroke: "#000",
          fill: "#000000",
          fillOpacity: 0.1,
        })
      ),
      // React.createElement(
      //   "p",
      //   null,
      //   "RadarChart wrapped by ResponsiveContainer"
      // ),
      React.createElement(
        "div",
        { style: { width: "100%", height: "100%"} },
        React.createElement(
          ResponsiveContainer,
          null,
          React.createElement(
            RadarChart,
            { data: data },
            React.createElement(PolarGrid, { radialLines: true }),
            React.createElement(PolarAngleAxis, { dataKey: "subject" }),
            React.createElement(PolarRadiusAxis, null),
            React.createElement(Tooltip, null),
            React.createElement(
              Radar,
              {
                dataKey: "A",
                stroke: "#000",
                fill: "#000",
                fillOpacity: 0.1,
                connectNulls: true,
              },
              React.createElement(LabelList, null)
            )
          )
        )
      )
    );
  }
}
Demo.displayName = "RadarChartDemo";
export default Demo;
