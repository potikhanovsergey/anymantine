// import { createStyles, MantineNumberSize, MantineTheme, rem } from "@mantine/core"

// const BREAKPOINT = rem(885)

// interface ConfiguratorStylesParams {
//   radius: MantineNumberSize
//   background?: string
// }

// export default createStyles(
//   (theme: MantineTheme, { radius, background }: ConfiguratorStylesParams) => ({
//     configurator: {
//       display: "flex",
//       maxWidth: "100%",
//       border: `${rem(1)} solid ${
//         theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.black
//       }`,
//       overflow: "hidden",
//       borderTopLeftRadius: theme.fn.radius(radius),
//       borderTopRightRadius: theme.fn.radius(radius),
//       borderBottom: 0,

//       [`@media (max-width: ${BREAKPOINT})`]: {
//         flexDirection: "column",
//       },
//     },

//     noCode: {
//       borderRadius: theme.fn.radius(radius),
//       borderBottom: `${rem(1)} solid ${
//         theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.black
//       }`,
//     },

//     copy: {
//       backgroundColor: "transparent !important",
//       border: 0,
//       color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     },
//     preview: {
//       flex: 1,
//       padding: theme.spacing.md,
//       background: theme.colorScheme === "dark" ? theme.black : theme.white,
//       display: "flex",
//       flexDirection: "column",
//     },

//     controls: {
//       boxSizing: "border-box",
//       width: rem(250),
//       padding: theme.spacing.md,
//       backgroundColor: background || (theme.colorScheme === "dark" ? theme.black : theme.white),
//       borderLeft: `${rem(1)} solid ${
//         theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.black
//       }`,

//       [`@media (max-width: ${BREAKPOINT})`]: {
//         width: "100%",
//         borderLeft: 0,
//         borderTop: `${rem(1)} solid ${
//           theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.black
//         }`,
//       },
//     },

//     prism: {
//       marginTop: 0,
//       borderBottomRightRadius: theme.fn.radius(radius),
//       borderBottomLeftRadius: theme.fn.radius(radius),
//       border: `${rem(1)} solid ${
//         theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.black
//       }`,
//     },

//     code: {
//       borderTopRightRadius: 0,
//       borderTopLeftRadius: 0,
//       borderBottomRightRadius: theme.fn.radius(radius),
//       borderBottomLeftRadius: theme.fn.radius(radius),
//     },
//   })
// )
