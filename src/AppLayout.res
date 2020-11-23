module Styles = %makeStyles(
  {
    container: ReactDOMRe.Style.make(
      ~width="100%",
      ~height="100%",
      ~backgroundColor="black",
      ~margin="0",
      (),
    ),
  }
)

@react.component
let make = () => {
  let classes = Styles.useStyles()
  let (value, setValue) = React.useState(_ => 0)
  <MaterialUi_ThemeProvider theme={MaterialUi_Theme.create(MaterialUi_ThemeOptions.make())}>
    {
      open MaterialUi
      <div className=classes.container>
        <CssBaseline />
        <Grid container=true>
          <Grid item=true md=Grid.Md._12>
          <MainPage/>
            // <Typography variant=#H4>"Examples"</Typography>
            // <BottomNavigation
            //   value={Any(value)}
            //   showLabels=true
            // >
            //     <IconButton color=#Inherit>
            //       <Badge badgeContent={"4"->ReasonReact.string} color=#Secondary>
            //         <MscharleyBsMaterialUiIcons.Notifications.Filled />
            //       </Badge>
            //     </IconButton>
            // </BottomNavigation>
            // <Button color=#Primary variant=#Contained>"Button"</Button>
          </Grid>
        </Grid>
      </div>
    }
  </MaterialUi_ThemeProvider>
}
