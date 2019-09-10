import React, { Fragment, useEffect, useState } from "react";
import Toolbar, { ToolbarItem, ToolbarTitle } from "appRoot/components/Toolbar";
import Icon from "appRoot/components/Icon";
import axios from "axios";

function InfoView(props) {
  const { params } = props.match;
  const [clData, setClData] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then(response => response.data)

      .then(data => data.find(data => data.id == params.id))
      .then(asd => {
        setClData(asd);
      });
  }, []);

  return (
    <Fragment>
      <Toolbar>
        <ToolbarTitle />
        <ToolbarItem icon="perm_identity" />
      </Toolbar>
      <Icon icon="bar_chart" style={{ marginTop: "3em", marginLeft: "11em" }} />
      <div
        style={{
          backgroundColor: "LightPink",
          borderTopLeftRadius: "1em",
          borderTopRightRadius: "1em",
          borderBottomLeftRadius: "1em",
          borderBottomRightRadius: "1em"
        }}
      >
        <h3 style={{marginLeft:"1em"}} >id:{clData.id}</h3>
        <h4 style={{marginLeft:"1em"}} >name:{clData.name}</h4>
        <h3 style={{marginLeft:"1em"}} >date:{clData.date}</h3>
        <h4 style={{marginLeft:"1em"}} >contact no:{clData.contact}</h4>
      </div>
      <h2 style={{marginTop:"3em", backgroundColor: "PaleGoldenrod	",}} >Thank you for visiting</h2>
    </Fragment>
  );
}
export default InfoView;
