import { Element, useNode } from "@craftjs/core";
import { FormControl, FormLabel, Grid, Paper, Slider } from "@material-ui/core";
import React from "react";
import { Text } from "../user/Text";

export const Header = ({ columns, margin, padding }) => {
  columns = columns || 1;
  const {
    connectors: { connect, drag },
  } = useNode();

  const columnItems = Array(columns)
    .fill()
    .map((s, i) => (
      <Grid key={i} item xs={12 / columns}>
        <Element
          id={i.toString()}
          is={Paper}
          style={{ height: "100%" }}
          canvas
          square
        >
          <Text text="Change elements here"></Text>
        </Element>
      </Grid>
    ));

  return (
    <Grid
      ref={(ref) => connect(drag(ref))}
      container
      style={{ height: 200 }}
    >
      {columnItems}
    </Grid>
  );
};

const HeaderSettings = () => {
  const {
    actions: { setProp },
    columns,
    margin,
    padding,
  } = useNode((node) => ({
    columns: node.data.props.columns,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Columns</FormLabel>
        <Slider
          value={columns || 1}
          step={1}
          min={1}
          max={3}
          onChange={(_, value) => {
            setProp((props) => (props.columns = value));
          }}
        />
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Margin</FormLabel>
        <Slider
          value={margin || 20}
          step={1}
          min={0}
          max={40}
          onChange={(_, value) => {
            setProp((props) => (props.margin = value));
          }}
        />
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          value={padding || 10}
          step={1}
          min={0}
          max={15}
          onChange={(_, value) => {
            setProp((props) => (props.padding = value));
          }}
        />
      </FormControl>
    </>
  );
};

Header.craft = {
  related: {
    settings: HeaderSettings,
  },
  rules: {
    canDrag: false,
  },
};
