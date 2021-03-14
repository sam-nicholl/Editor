import React from "react";

import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider, TextField } from "@material-ui/core";

export const Image = ({ source, alt, width }) => {
  const {
    connectors: { connect, drag },
  } = useNode();


  return (
    <img
      ref={(ref) => connect(drag(ref))}
      style={{ width: `${width}px` }}
      src={source}
      alt={alt}
    />
  );
};

const ImageSettings = () => {
  const {
    actions: { setProp },
    width,
    source,
  } = useNode((node) => ({
    width: node.data.props.width,
    source: node.data.props.source,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
        <Slider
          value={width || 10}
          step={10}
          min={1}
          max={600}
          onChange={(_, value) => {
            setProp((props) => (props.width = value));
          }}
        />
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Source</FormLabel>
        <TextField
          variant="outlined"
          value={source}
          onChange={(_, value) => {
            setProp((props) => (props.source = value));
          }}
        />
      </FormControl>
    </>
  );
};

Image.craft = {
  related: {
    settings: ImageSettings,
  },
};
