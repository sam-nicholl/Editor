import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export const Container = ({
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
      style={{ margin: "5px 0", background, padding: `${padding}px`, ...style }}
      elevation={elevation}
      square={square}
    >
      {children}
    </Paper>
  );
};
