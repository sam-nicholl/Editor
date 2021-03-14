import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { Header } from "./layout/Header";

export const Page = ({
  background,
  padding = 0,
  style,
  elevation,
  square,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ padding: 10, height: 900, maxWidth: 600, width: 600 }}
      elevation={elevation}
      square={square}
    >
      {children}
    </Paper>
  );
};

Page.craft = {};
