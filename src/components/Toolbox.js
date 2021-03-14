import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
  Paper,
} from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import { Image } from "./user/Image";
import { Text } from "./user/Text";
import { TextFields, ViewColumnOutlined } from "@material-ui/icons";
import { ColumnLayout } from "./user/ColumnLayout";
import StickyBox from "react-sticky-box";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StickyBox offsetTop={300} offsetBottom={20}>
      <Paper style={{ height: 200, width: 64 }}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <MaterialButton
              ref={(ref) =>
                connectors.create(ref, <ColumnLayout columns={3} />)
              }
            >
              <ViewColumnOutlined />
            </MaterialButton>
          </Grid>
          <Grid item xs={12}>
            <MaterialButton
              ref={(ref) =>
                connectors.create(ref, <Text text="input your text here" />)
              }
            >
              <TextFields />
            </MaterialButton>
          </Grid>
        </Grid>
      </Paper>
    </StickyBox>
  );
};
