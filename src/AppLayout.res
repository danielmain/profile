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
            <Typography variant=#H4> "@jsiebern/bs-material-ui Examples" </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> "Class Override" </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6></Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6> <Typography variant=#H5> "Icons" </Typography> </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6> <Typography variant=#H5> "Popover" </Typography> </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> "WithStylesSafe" </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> "WithStylesUnsafe" </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> "Theme Provider" </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> "Theme Provider Override" </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6> <Typography variant=#H5> "List" </Typography> </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/tabs/DisabledTabs.tsx"
                target="_blank">
                {"Tabs"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/steppers/VerticalLinearStepper.tsx"
                target="_blank">
                {"Stepper"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/selects/SimpleSelect.tsx"
                target="_blank">
                {"Select"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/slider/InputSlider.tsx"
                target="_blank">
                {"Slider"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/slider/InputSlider.tsx"
                target="_blank">
                {"Dashboard"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6>
          </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/box/box.md"
                target="_blank">
                {"Box"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5>
              <a
                href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/styles/api/api.md#serverstylesheets"
                target="_blank">
                {"ServerStyleSheets"->React.string}
              </a>
            </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container=true alignItems=#Center>
          <Grid item=true md=Grid.Md._6>
            <Typography variant=#H5> {"TextField size Prop"->React.string} </Typography>
          </Grid>
          <Grid item=true md=Grid.Md._6> </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    }
  </MaterialUi_ThemeProvider>
}
