import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Slider,
} from "@material-ui/core";
import {
  FormatAlignCenterOutlined,
  FormatAlignLeft,
  FormatAlignLeftOutlined,
  FormatAlignRightOutlined,
} from "@material-ui/icons";

export const Text = ({ text, fontSize, textAlign }) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
        disabled={!editable}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    textAlign,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    textAlign: node.data.props.textAlign,
  }));

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  setProp((props) => (props.textAlign = "left"));
                }}
              >
                <FormatAlignLeftOutlined />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  setProp((props) => (props.textAlign = "center"));
                }}
              >
                <FormatAlignCenterOutlined />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  setProp((props) => (props.textAlign = "right"));
                }}
              >
                <FormatAlignRightOutlined />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl size="small" component="fieldset">
            <FormLabel component="legend">Font size</FormLabel>
            <Slider
              value={fontSize || 7}
              step={7}
              min={1}
              max={50}
              onChange={(_, value) => {
                setProp((props) => (props.fontSize = value));
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
  rules: {},
};
