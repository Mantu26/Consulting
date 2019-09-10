import React, { Fragment, useEffect, useState } from "react";
import Toolbar, { ToolbarItem, ToolbarTitle } from "appRoot/components/Toolbar";
import Icon from "appRoot/components/Icon";
import Btn from "appRoot/components/Btn";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then(res => {
        return res.data;
      })
      .then(data1 => {
        console.log(data1);

        setData(data1);
      }).catch(err => console.log(err))
  }, []);

  return (
    <Fragment>
      <Toolbar>
        <ToolbarItem icon="arrow_back_ios" />
        <ToolbarTitle />
        <ToolbarItem icon="notification_important" />
        <ToolbarItem icon="perm_identity" />
      </Toolbar>
      <h3 style={{ marginTop: "3em", marginLeft: "2rem" }}>Find yours</h3>
      <h4 style={{ marginLeft: "2rem" }}>Trusty Consulter</h4>
      <Icon icon="search" style={{ marginTop: "1rem" }} />
      <div style={{ marginTop: "1em" }}>
        <Btn>Featured Only</Btn>
        <Btn>All Consulter</Btn>
      </div>
      <div style={{ marginTop: "2em" }}>
        {data.map((val, index) => {
          return (
            <div key={index}>
              <img
                src={`${val.img}`}
                alt="Avatar"
                style={{
                  width: "30%",
                  borderTopLeftRadius: "2em",
                  borderTopRightRadius: "2em",
                  borderBottomLeftRadius: "2em",
                  borderBottomRightRadius: "2em",
                  marginTop: "2em",
                  marginLeft: "2em"
                }}
              />

              <Btn renderAs={Link} to={`/info/${val.id}`}  >{val.name}</Btn>
              <br />
              <div >{val.date}</div>

            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default HomeView;
