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
import { ViewColumnOutlined } from "@material-ui/icons";
import { ColumnLayout } from "./user/ColumnLayout";
import StickyBox from "react-sticky-box";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StickyBox
      offsetTop={300}
      offsetBottom={20}
      style={{ border: "3px solid green" }}
    >
      <Paper style={{ height: 200 }}>
        <MaterialButton
          ref={(ref) => connectors.create(ref, <ColumnLayout columns={3} />)}
        >
          <ViewColumnOutlined />
        </MaterialButton>
      </Paper>
    </StickyBox>
  );
};
