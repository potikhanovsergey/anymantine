import { forwardRef } from "react"
import {
  Button,
  createPolymorphicComponent,
  createStyles,
  rem,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core"

interface IHeaderButton extends UnstyledButtonProps {
  variant?: "outline" | "filled"
  withLeftBorder?: boolean
}

const useStyles = createStyles((theme, { variant }: { variant: "outline" | "filled" }) => ({
  button: {
    // height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    ...(variant === "filled" && {
      background: theme.colors.violet[1],
      color: theme.black,
      "&:hover": {
        background: theme.colors.violet[2],
      },
    }),
    ...(variant === "outline" && {
      "&:hover": {
        backgroundColor: theme.colors[theme.primaryColor][1],
      },
    }),
  },
}))

const _Button = forwardRef<HTMLButtonElement, IHeaderButton>(
  ({ children, className, variant = "outline", withLeftBorder = false, ...others }, ref) => {
    const { classes, cx } = useStyles({ variant })
    return (
      <Button
        // className={cx(classes.button, className)}
        // component="button"
        ref={ref}
        {...others}
      >
        {children}
      </Button>
    )
  }
)

const HeaderButton = createPolymorphicComponent<"button", IHeaderButton>(_Button)

export default HeaderButton
