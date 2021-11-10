import { Button, Card, Col, Image, Row } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="footer lightgrey_bg">
    <Row>
        <Col lg={3}>
            <Image src={'./assets/img/logo.png'} className="Footer_brandlogo"/>
            <p className="Footer_content poppins_regular text-center">Address : Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
            <div className="Footer_logoGrp d-flex">
                <Image src={'../assets/img/fb.png'} className="Footer_logo"/>
                <Image src={'../assets/img/insta.png'} className="Footer_logo"/>
                <Image src={'../assets/img/twt.png'} className="Footer_logo"/>
                <Image src={'../assets/img/in.png'} className="Footer_logo"/>
            </div>
        </Col>
        <Col lg={2}>
            <h2 className="Footer_subhead poppins_medium linkBlue_c">Our Services</h2>
            <ul className="Footer_list">
                <li><a href="#" className="poppins_regular dark_c">Buy</a></li>
                <li><a href="#" className="poppins_regular dark_c">Rent/Lease</a></li>
                <li><a href="#" className="poppins_regular dark_c">Sell</a></li>
            </ul>
        </Col>
        <Col lg={2}>
            <h2 className="Footer_subhead poppins_medium linkBlue_c">Quick Links</h2>
            <ul className="Footer_list">
                <li><a href="#" className="poppins_regular dark_c">Blogs</a></li>
                <li><a href="#" className="poppins_regular dark_c">Feedback</a></li>
                <li><a href="#" className="poppins_regular dark_c">About Us</a></li>
                <li><a href="#" className="poppins_regular dark_c">Contact Us</a></li>
            </ul>
        </Col>
        <Col lg={5}>
            <h2 className="Footer_subhead poppins_medium linkBlue_c">Subscribe US</h2>
            <Card className="Footer_card">
                <Card.Body className="Footer_subscribe d-flex" >
                    <input type="text" placeholder="Enter Your Email Address" className="Footer_inp form-control me-2"/>
                    <Button className="Footer_btn orange_bg" type="button">Subscribe</Button>
                </Card.Body>
            </Card>
        </Col>      
    </Row>
    <hr className="Footer_hr"></hr>
    <Row>
        <p className="Footer_text poppins_regular">© 2021 Zameen Square. All rights reserved.</p>
    </Row>
</div> 
     );
}
 
export default Footer;