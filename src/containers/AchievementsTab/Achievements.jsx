import React, { useState, Fragment } from "react";
import Block from "./Block.js";
import streaky from "./Streaky.png";
import jesus from "./jesus.jpg";
import sixpacks from "./sixpacks.jpg";
import peachy from "./Peachy.jpg";
import Button from "./Button";

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
        header="Stamp of Approval"
        description="You have been blessed by the CS god"
        image={jesus}
      />
      <Block
        header="6 Pack Shortcuts"
        description="Obtained a 6 pack in one day"
        image={sixpacks}
      />
      <Block
        header="6 Pack Shortcuts"
        description="Obtained a 6 pack in one day"
        image={sixpacks}
      />
    </div>
  );

  let blockArray = [];
  for (let i = 0; i < 6; i++) {
    blockArray.push(1);
  }
  blockArray = blockArray.map((x) => (
    <Block
      header="Stamp of Approval"
      description="You have been blessed by the CS god"
      image={jesus}
    />
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
    <div>
      <h1 style={{ textAlign: "left", color: "#black" }}>Unlocked (6)</h1>
      <hr style={{ borderTop: "3px double #8c8b8b" }} />
      {unlocked}
      <h1 style={{ textAlign: "left", color: "#black" }}>Locked (24)</h1>
      <hr style={{ borderTop: "3px double #8c8b8b" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>{locked}</div>
      {loadMoreButton}
    </div>
  );
};

export default Achievements;
