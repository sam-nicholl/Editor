import React, { useRef } from "react";
import { Grid } from "@material-ui/core";

import { Element, Frame } from "@craftjs/core";
import { Page } from "../components/Page";
import { Header } from "../components/layout/Header";

export default function LetterEditor({ enablePan }) {
  const ref = useRef(null);
  return (
    <Grid
      direction="column"
      alignItems="center"
      justify="center"
      container
      style={{ paddingTop: "10px" }}
    >
      <Grid item xs={9}>
        <Frame>
          <Element
            is={Page}
            padding={5}
            background="#fff"
            elevation={3}
            square
            canvas
            ref={ref}
          >
            <Header></Header>
            
          </Element>
        </Frame>
      </Grid>
    </Grid>
  );
}
