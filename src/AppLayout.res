module Styles = %makeStyles(
  {
    container: ReactDOMRe.Style.make(
      ~width="100%",
      ~height="100%",
      ~maxWidth="970px",
      ~margin="30px auto",
      (),
    ),
  }
)

@react.component
let make = () => {
  let classes = Styles.useStyles()
  <MaterialUi_ThemeProvider theme={MaterialUi_Theme.create(MaterialUi_ThemeOptions.make())}>
    {
      open MaterialUi
      <div className=classes.container>
        <CssBaseline />
        <Grid container=true>
          <Grid item=true md=Grid.Md._12>
            <Typography variant=#H4>"Examples"</Typography>
            <Button color=#Primary variant=#Contained>"Button"</Button>
          </Grid>
        </Grid>
      </div>
    }
  </MaterialUi_ThemeProvider>
}
