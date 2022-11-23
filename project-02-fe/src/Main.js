import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import MyPosts from './pages/MyPosts';



export default class Main extends React.Component {

    state = {
        page: 'home'
    }

    renderPage = () => {
        if (this.state.page === "home") {
            return <HomePage />
        }
        if (this.state.page === "search") {
            return <SearchPage />
        }
        if (this.state.page === "create") {
            return <CreatePage />
        }
        if (this.state.page === "mypost") {
            return <MyPosts />
        }
    }

    switchPage = (currentPage) => {
        this.setState({

            page: currentPage
        })

    }

    render() {


        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">CARousel</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"
                                    onClick={() => {
                                        this.switchPage("home")
                                    }}


                                >Home</Nav.Link>
                                <Nav.Link href="#search"
                                    onClick={() => {
                                        this.switchPage("search")
                                    }}


                                >Search car</Nav.Link>
                                <Nav.Link href="#link"
                                    onClick={() => {

                                        this.switchPage("create")
                                    }}

                                >Create post</Nav.Link>
                                <Nav.Link href="#mypost"
                                    onClick={() => {

                                        this.switchPage("mypost")
                                    }}
                                >My Post</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {this.renderPage()}
            </React.Fragment>


        )


    }
}