import React, { useRef } from "react";
import { Grid } from "@material-ui/core";

import { Container } from "../components/user/Container";
import { Text } from "../components/user/Text";
import { Element, Frame } from "@craftjs/core";
import { Image } from "../components/user/Image";
import { ColumnLayout } from "../components/user/ColumnLayout";
import { Page } from "../components/Page";

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
            <ColumnLayout columns={3}></ColumnLayout>
          </Element>
        </Frame>
      </Grid>
    </Grid>
  );
}
