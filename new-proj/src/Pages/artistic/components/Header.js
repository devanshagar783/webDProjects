import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--lightBlue_1);
    border-bottom: 1px solid var(--mediumSlateBlue);
    .navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }
    nav ul li{
        display: inline-block;
        margin: 0 0.5rem;
        a{
            font-size: 1.6rem;
            font-weight: 500;
            display: inline-block;
            padding: 0.5rem 1rem;
            color: var(--darkBlue_2);
        }
        &:hover{
            a{
                text-decoration: underline;
            }
        }
    }
    .navMenu{
        disalay; flex;
        align-items: center;
        justify-content: flex-end;
    }

`;

const Header = () => {
    return (
        <HeaderStyles>
            <div className="container">
                <div className="navigation">
                    <Logo />
                    <div className="navMenu">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="Home">Home</Link>
                                </li>
                                <li>
                                    <Link to="Services">Services</Link>
                                </li>
                                <li>
                                    <Link to="About">About</Link>
                                </li>
                                <li>
                                    <Link to="Contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </HeaderStyles>
    );
};

export default Header;
