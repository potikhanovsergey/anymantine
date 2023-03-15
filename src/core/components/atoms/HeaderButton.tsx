import { forwardRef } from "react"
import {
  createPolymorphicComponent,
  createStyles,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
  button: {
    borderRight: `1px solid ${theme.black}`,
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    ":hover": {
      backgroundColor: theme.colors.violet[1],
    },
  },
}))

const _Button = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ children, className, ...others }, ref) => {
    const { classes, cx } = useStyles()
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

const HeaderButton = createPolymorphicComponent<"button", UnstyledButtonProps>(_Button)

export default HeaderButton
