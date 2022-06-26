import { Typography, Button, ButtonGroup } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

const Create = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Create A New Note
        </Typography>
        <Typography color="secondary" gutterBottom>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          adipisci, et dicta sunt, labore necessitatibus eligendi ipsa veritatis
          ipsam harum sequi reiciendis aperiam earum culpa quos eum enim minima
          repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem illo ex asperiores, voluptatem architecto quo, omnis magnam
          minima error doloribus molestias officiis. Culpa aspernatur atque
          incidunt et natus, sint sapiente.
        </Typography>

        <Typography variant="h6" component="h4" color="textSecondery">
          Another Notes
        </Typography>

        {/* Button  */}
        <div>
          <Button variant="contained" color="success" gutterBottom>
            Clcik Here
          </Button>
          <Button variant="outlined" color="error">
            Clcik Here
          </Button>
          <Button type="submit" variant="outlined" color="error">
            Submit
          </Button>
        </div>
        <br />
        <ButtonGroup variant="contained" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br />

        <Button
          onClick={() => console.log("You clicked me")}
          type="submit"
          variant="contained"
          color="warning">
          Submit
        </Button>
      </Container>
    </div>
  )
}

export default Create
