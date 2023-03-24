import React from "react";
import Footer from "../footer/footer";
import { Grid, Typography, Button, Icon, Box, Container } from "@mui/material";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image10 from "../../assets/image10.jpg";
import Image11 from "../../assets/image11.jpg";
import Image12 from "../../assets/image12.jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Herosection from "../herosection/herosection";
const PageData = () => {
  return (
    <>
    <Herosection/>
      <Grid container mt={8} spacing={5}>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: {lg:"30%",xs:"20%"} }}
          >
            WELCOME
          </Typography>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "30%" }}
          >
            VIDEOS
          </Typography>
        </Grid>
      </Grid>
      <br></br>
      <Grid container xs={12}>
        <Grid item lg={4} sm={6} xs={12}>
          <Typography
            sx={{
              marginLeft: "10%",
              // textAlign: "justify",
              // textJustify: "inter-word",
              // marginLeft: "10px",
            }}
          >
            Make your Software.com presents new free matrimonial website designs
            for its customers. The design upgrade is free to new and old
            customer who have purchased the script in last six months.In case of
            any feedback please feel free to get back to us.visit us on{" "}
            <u>https://www.makeyoursoftware.com</u>
          </Typography>
          <Button
            sx={{
              float: "left",
              background: "grey",
              margin: 2,
              marginLeft: "10%",
            }}
            variant="contained"
          >
            {" "}
            More
          </Button>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ marginLeft: "20%" }} src={Image2} alt="image2" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ marginLeft: "20%" }} src={Image3} alt="image3" />
        </Grid>
      </Grid>

      <Container
        maxWidth={false}
        sx={{
          height: { xs: 350, lg: 250 },
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
          background: "#FF311A",

          position: "absolute",
          left: 0,
        }}
      >
        <Grid m={2} container lg={12} sm={12} xs={12} md={12}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
              color: "white",
              marginLeft: "40%",
            }}
          >
            HOWS IT WORKS
          </Typography>
        </Grid>

        <Grid
          container
          m={6}
          sx={{ textAlign: { xs: "center", lg: "justify" } }}
        >
          <Grid item lg={3} sm={6} xs={12}>
            <Icon sx={{ marginLeft: "10%" }}>
              <BorderColorIcon sx={{ color: "white" }} />
            </Icon>
            <Typography
              sx={{ color: "white", fontSize: "small", paddingLeft: 5 }}
            >
              FREE REGISTRATION
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon>
              <PersonIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              FREE PROFILE & PICTURES
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon>
              <GroupsIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              SEARCH,SHORTLIST & CONTACT
            </Typography>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Icon>
              <ChatBubbleIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              COMMUNICATE & MOVE AHEAD
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          // margin:6,
          // padding: { lg: 5, md: 10, sm: 20, xs: 25 },
          marginTop: { lg: "20%", xs: "95%", md: "30%" },
          height: 300,
        }}
      >
        <Grid container>
          <Grid item lg={12} sm={12} xs={12} md={12}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "xx-large",
                marginLeft: "38%",
                marginTop: { lg: "1%", md: "2%" },
              }}
            >
              SUCCESS STORIES
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} md={6}>
            <Typography
              sx={{
                marginLeft: "10%",
                // textAlign: {xs:"justify",lg:"justify",md:"justify",sm:"justify"},
                // textJustify: "inter-word",
                // marginLeft: "150px",
              }}
            >
              Watch out this space it would be loaded with happy customers
              review very soon.We have just started this month but already
              customers have Demo Matrimony Management,Ahemdabaad engage.
            </Typography>
          </Grid>
          <Grid m={2} container xs={12}>
            <Button
              variant="contained"
              sx={{ marginLeft: "4%", background: "grey" }}
            >
              More
            </Button>
          </Grid>
        </Grid>
        <br></br>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          background: "#F8F8F8",
          height: { lg: 350, xs: 430 },
          width: "100%",
        }}
      >
        <Grid m={2} container lg={12} sm={12} xs={12} md={12}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
              color: "black",
              marginLeft: "35%",
            }}
          >
            ANNOUNCEMENT
          </Typography>
        </Grid>
        <Grid container>
          <Grid ml={10} item xs={3}>
            <img src={Image2} alt="image2" />
          </Grid>
          <Grid m={5} item>
            <Typography>ATTN: LAUNCH OF NEW MATRIMONY LAYOUT</Typography>
            <Typography sx={{ alignItems: "justify" }}>
              We pleased to announce new version
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Button
            variant="contained"
            sx={{ marginLeft: "32%", background: "grey" }}
          >
            More
          </Button>
        </Grid>
      </Container>
      <Grid m={10} container>
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image10} alt="image10" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image11} alt="image11" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img src={Image12} alt="image12" />
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default PageData;
