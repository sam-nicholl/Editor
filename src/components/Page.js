import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";

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

Page.craft = {
  rules: {
    canDrop: (node) => node.data.name === "ColumnLayout",
  },
};
