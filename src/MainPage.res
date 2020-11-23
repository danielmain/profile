module Styles = %makeStyles(
  {
    root: ReactDOMRe.Style.make(
        ~flexGrow="1",
        (),
    ),
    menuButton: ReactDOMRe.Style.make(
        ~marginRight="2",
        (),
    ),
    title: ReactDOMRe.Style.make(
        ~flexGrow="1",
        (),
    ),
    menuContainer: ReactDOMRe.Style.make(
        ~display="flex",
        ~alignItems="center",
        (),
    ),
    avatar: ReactDOMRe.Style.make(
        ~width="100",
        ~height="100",
        (),
    ),
  }
)

@react.component
let make = () => {
  let classes = Styles.useStyles()
    open MaterialUi
    <AppBar position=#Static>
        <Toolbar>
            <div>
                <div className=classes.menuContainer>
                    <IconButton
                        edge=MaterialUi.IconButton.Edge.start
                        className=classes.menuButton
                        color=#Inherit>
                    <MscharleyBsMaterialUiIcons.Menu.Filled />
                    </IconButton>
                    <Typography variant=#H6 className={classes.title}>
                    "Timeline"
                    </Typography>
                // <Button color=#Inherit>"Login"</Button>
                </div>
                <div className=classes.menuContainer>
                    <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/4303099?s=400&u=fdc8480753f4ecb01d6ad7da9b94d0df93ca8ab2&v=4" className=classes.avatar />
                // <Button color=#Inherit>"Login"</Button>
                </div>
            </div>
        </Toolbar>
    </AppBar>
}
