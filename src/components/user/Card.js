import React from "react";
import { Text } from "./Text";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";

export const Card = ({ background, padding = 20, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Container
      ref={(ref) => connect(drag(ref))}
      background={background}
      padding={padding}
    >
      {children}
    </Container>
  );
};
