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
  FormatAlignLeftOutlined,
  FormatAlignRightOutlined,
  FormatBoldOutlined,
  FormatItalicOutlined,
  FormatUnderlinedOutlined,
} from "@material-ui/icons";
import sanitizeHtml from "sanitize-html";

export const Text = ({ text, fontSize, textAlign }) => {
  const [html, setHtml] = useState(`<p>${text}</p>`);
  const [editable, setEditable] = useState(false);

  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const sanitiseConf = {
    allowedTags: ["b", "i", "em", "strong", "p", "h1", "u"],
  };

  const sanitiseHtml = () => {
    setHtml(sanitizeHtml(html, sanitiseConf));
  };

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        html={html}
        onChange={handleChange}
        tagName="pre"
        style={{ fontSize: `${fontSize}px`, textAlign }}
        disabled={!editable}
        onBlur={sanitiseHtml}
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
          <Grid container>
            <Grid item xs={3}>
              <EditButton cmd="bold">
                <FormatBoldOutlined />
              </EditButton>
            </Grid>
            <Grid item xs={3}>
              <EditButton cmd="italic">
                <FormatItalicOutlined />
              </EditButton>
            </Grid>
            <Grid item xs={3}>
              <EditButton cmd="underline">
                <FormatUnderlinedOutlined />
              </EditButton>
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

const EditButton = ({ cmd, arg, children }) => {
  return (
    <Button
      key={cmd}
      onMouseDown={(evt) => {
        evt.preventDefault();
        document.execCommand(cmd, false, arg);
      }}
    >
      {children}
    </Button>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
  rules: {},
};
