import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";

const Input = ({
  icon = null,
  iconFillColor = "white",
  iconPosition = "left",
  iconBackground = null,
  inputRef,
  appearance = "default",
  styles,
  ...props
}) => {
  const iconBackgroundColor = `iconBackground${iconBackground}`;

  return (
    <div {...css(styles.container, styles[iconPosition])}>
      {icon !== null ? (
        <div {...css(styles[iconBackgroundColor], styles.icon)}>
          <Icon fillColor={iconFillColor} icon={icon} />
        </div>
      ) : (
        ""
      )}
      <input
        ref={inputRef}
        {...css(styles.input, styles[appearance])}
        {...props}
      />
    </div>
  );
};

export default withStyles(({ themes, colors }) => {
  return {
    input: {
      padding: "13px",
      margin: "20px",
      border: "1px solid",
      borderRadius: "2px",
      width: "100%",
      minWidth: "120px",
      borderColor: colors.aluminum,
      ":focus": {
        borderColor: colors.secondary
      }
    },
    container: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    icon: {
      display: "flex"
    },
    left: {
      ":nth-child(1n) div": {
        borderRadius: "2px 0 0 2px"
      },
      ":nth-child(1n) div + input": {
        marginLeft: "0",
        borderRadius: "0 2px 2px 0",
        borderLeft: "0"
      }
    },
    right: {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      ":nth-child(1n) div": {
        borderRadius: "0 2px 2px 0"
      },
      ":nth-child(1n) div + input": {
        marginRight: "0",
        borderRadius: "2px 0 0 2px",
        borderRight: "0"
      }
    },

    default: {
      ":focus": {
        borderColor: colors.default
      }
    },
    primary: {
      ":focus": {
        borderColor: colors.primary
      }
    },
    secondary: {
      ":focus": {
        borderColor: colors.secondary
      }
    },
    success: {
      ":focus": {
        borderColor: colors.success
      }
    },
    danger: {
      ":focus": {
        borderColor: colors.danger
      }
    },
    iconBackgroundprimary: { backgroundColor: colors.primary },
    iconBackgroundsecondary: { backgroundColor: colors.secondary },
    iconBackgroundsuccess: { backgroundColor: colors.success },
    iconBackgrounddanger: { backgroundColor: colors.danger },
    iconBackgrounddawn: { backgroundColor: colors.dawn },
    iconBackgroundnightsky: { backgroundColor: colors.nightsky },
    iconBackgroundcarbon: { backgroundColor: colors.carbon },
    iconBackgrounddarkMetal: { backgroundColor: colors.darkMetal },
    iconBackgroundaluminum: { backgroundColor: colors.aluminum },
    iconBackgroundsand: { backgroundColor: colors.sand }
  };
})(Input);
