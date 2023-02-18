import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"

function NavBar() {
    return (
      <div>
        <AppBar poisition="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <Button
                  sx={{ 
                    my: 2, 
                    color: "white", 
                    display: "block", 
                }}
                >
                    Home
                </Button>
                <Button
                  sx={{ 
                    my: 2, 
                    color: "white", 
                    display: "block", 
                }}
                >
                    Blog
                </Button> 
                <Button
                  sx={{ 
                    my: 2, 
                    color: "white", 
                    display: "block", 
                }}
                >
                    LogIn
                </Button>
                <Button
                  sx={{ 
                    my: 2, 
                    color: "white", 
                    display: "block", 
                }}
                >
                    Contact
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
}

// named export — can have many named export - asuppose to default export
export { NavBar };