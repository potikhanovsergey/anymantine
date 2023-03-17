import { forwardRef } from "react"
import {
  createPolymorphicComponent,
  createStyles,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core"

interface IHeaderButton extends UnstyledButtonProps {
  variant?: "outline" | "filled"
  withLeftBorder?: boolean
}

const useStyles = createStyles(
  (
    theme,
    { variant, withLeftBorder = false }: { variant: "outline" | "filled"; withLeftBorder?: boolean }
  ) => ({
    button: {
      borderRight: `1px solid ${theme.black}`,
      borderLeft: withLeftBorder ? `1px solid ${theme.black}` : undefined,
      height: "100%",
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      ...(variant === "filled" && {
        background: theme.black,
        color: theme.white,
        "&:hover": {
          background: theme.colors.dark[4],
        },
      }),
      ...(variant === "outline" && {
        "&:hover": {
          backgroundColor: theme.colors[theme.primaryColor][1],
        },
      }),
    },
  })
)

const _Button = forwardRef<HTMLButtonElement, IHeaderButton>(
  ({ children, className, variant = "outline", withLeftBorder = false, ...others }, ref) => {
    const { classes, cx } = useStyles({ variant, withLeftBorder })
    return (
      <UnstyledButton
        className={cx(classes.button, className)}
        component="button"
        ref={ref}
        {...others}
      >
        {children}
      </UnstyledButton>
    )
  }
)

const HeaderButton = createPolymorphicComponent<"button", IHeaderButton>(_Button)

export default HeaderButton
