import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class Happening extends Component {
  render() {
    const Speaker1 = (props) => {
      return (
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://globalsummit.tech/assets/uploads/sites/8/2019/12/Photo_Fandakova_300x300.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>The sky Is The Limit</strong>
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };
    const Speaker2 = (props) => {
      return (
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://globalsummit.tech/assets/uploads/sites/8/2019/12/IvaAbadjieva_v2.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Another Cool Stuff</strong>
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };
    const Speaker3 = () => {
      return (
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/ivangeorgiev300x300.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>This is Awesome</strong>
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };
    const Speaker4 = () => {
      return (
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://globalsummit.tech/assets/uploads/sites/8/2019/11/dave300x300.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                <strong>Cool Gadgets</strong>
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };

    return (
      <div className="container text-center ">
        <h4 className=" m-4"> What is Happening?</h4>
        <div className="row ">
          <div className="col-12 col-sm-5  shadow">
            <Speaker1 />
          </div>
          <div className="col col-sm"></div>
          <div className="col-12 col-sm-5  shadow">
            <Speaker2 />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-5 shadow">
            <Speaker3 />
          </div>
          <div className="col col-sm"></div>

          <div className="col-12 col-sm-5 shadow ">
            <Speaker4 />
          </div>
        </div>
      </div>
    );
  }
}

export default Happening;
