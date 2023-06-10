import React from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";

// import search component

import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
const Header = () => {
  // Adding logo - I may remove it
  const logoURL = "https://www.flipkart.com/";
  const subURL = "https://www.hdjdjd.com/";
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <Component>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Discover&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Vendors
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="sub-logo" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
