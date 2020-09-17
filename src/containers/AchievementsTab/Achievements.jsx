import React, { useState, Fragment } from "react";
import Block from "./Block.js";
import streaky from "./Streaky.png";
import jesus from "./jesus.jpg";
import sixpacks from "./sixpacks.jpg";
import peachy from "./Peachy.png";
import Button from "./Button";
import Rock from "./rock.png";
import lock from "./lock.png";

const Achievements = (props) => {
  const unlocked = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingBottom: "5%",
      }}
    >
      <Block
        header="Streaky"
        description="Exercised for 5 days in a row"
        image={streaky}
      />
      <Block
        header="Bootylicious"
        description="Completed 20 Butt workouts"
        image={peachy}
      />
      <Block
        header="6 Pack Shortcuts"
        description="Obtained a 6 pack in one day"
        image={sixpacks}
      />
      <Block
        header="The Rock"
        description="Completed 50 exercises in one month"
        image={Rock}
      />
    </div>
  );

  let blockArray = [];
  for (let i = 0; i < 9; i++) {
    blockArray.push(1);
  }
  blockArray = blockArray.map((x) => (
    <Block header="Unknown" description="Achievement Locked" image={lock} />
  ));

  const [loadMore, setloadMore] = useState(false);

  let locked = (
    <div style={{ display: "flex", flexDirection: "row" }}>{blockArray}</div>
  );

  const lockedAll = (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>{locked}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>{locked}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>{locked}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>{locked}</div>
    </Fragment>
  );

  if (loadMore) {
    locked = lockedAll;
  }

  const loadMoreButton = loadMore ? (
    <Button description="Show Less" onClick={() => setloadMore(!loadMore)} />
  ) : (
    <Button description="Show More" onClick={() => setloadMore(!loadMore)} />
  );

  return (
    <div style={{ backgroundColor: "#101010" }}>
      <br />
      <h1 style={{ textAlign: "left", color: "white" }}>Unlocked (4)</h1>
      <hr style={{ borderTop: "3px double #E2B254" }} />
      <br />
      {unlocked}
      <h1 style={{ textAlign: "left", color: "white" }}>Locked (24)</h1>
      <hr style={{ borderTop: "3px double #E2B254" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>{locked}</div>
      <div style={{ marginTop: 20 }}>{loadMoreButton}</div>
    </div>
  );
};

export default Achievements;
