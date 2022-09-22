import React from "react";
import { ThemeButton, HeaderContainer, DropdownMenuButton, CustomDropdownMenu } from "./HeaderStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <CustomDropdownMenu
          title={<FontAwesomeIcon icon={faBars} style={{ fontSize: '2em' }} />}
          enableChevron
          animate
          dropdownLocation="full-screen"
          style={{
            left: '0px', width: '75vw', height: '100vh', textAlign: 'left', maxWidth: '500px',
            backgroundColor: props.theme === 'light' ? 'rgb(245 245 245 / 95%)' : 'rgb(50 50 50 / 95%)',
            color: props.theme === 'light' ? 'black' : 'white',
          }}
        >
          <DropdownMenuButton href={`/`}>Home</DropdownMenuButton>
          <DropdownMenuButton href={`/learning/`}>Knowledge Sharing</DropdownMenuButton>
          <DropdownMenuButton href={`/engineering/`}>Engineering Projects</DropdownMenuButton>

        </CustomDropdownMenu>

        <ThemeButton>
          <label>Theme:</label>
          <FontAwesomeIcon icon={props.theme === 'dark' ? faSun : faMoon}
            onClick={() => {
              if (props.theme === 'dark') {
                props.setTheme('light');
              } else {
                props.setTheme('dark');
              }
            }}>
          </FontAwesomeIcon>
        </ThemeButton>
      </HeaderContainer>
    </>
  )
}

export default Header;