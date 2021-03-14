import React, { useState } from "react";
import { Editor, useEditor } from "@craftjs/core";
import StickyBox from "react-sticky-box";
import { Paper, Grid } from "@material-ui/core";
import { PanTool, ViewColumnOutlined } from "@material-ui/icons";

import LetterEditor from "./pages/LetterEditor";
import { Container } from "./components/user/Container";
import { ColumnLayout } from "./components/user/ColumnLayout";
import { Card } from "./components/user/Card";
import { Toolbox } from "./components/Toolbox";
import { Page } from "./components/Page";
import { SettingsPanel } from "./components/SettingsPanel";

import useWindowDimensions from "./utils/useWindowDimensions";

export default function App() {
  const { height } = useWindowDimensions();

  return (
    <Editor
      resolver={{ Card, Text, Container, Paper, Image, ColumnLayout, Page }}
    >
      <Grid container>
        <Grid item>
          <Toolbox />
        </Grid>
        <Grid item xs={9}>
          <LetterEditor style={{ width: "100%" }}></LetterEditor>
        </Grid>

        <Grid item xs={2}>
          <StickyBox
            offsetTop={height / 3}
            offsetBottom={20}
            style={{ border: "3px solid green" }}
          >
            <Paper>
              <SettingsPanel />
            </Paper>
          </StickyBox>
        </Grid>
      </Grid>
    </Editor>
  );
}
