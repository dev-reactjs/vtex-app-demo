import React from "react";
import Layout from "@vtex/styleguide/lib/Layout";
import Box from "@vtex/styleguide/lib/Box";
import Card from "@vtex/styleguide/lib/Card";
import { FeatureData } from "./data";
import "./style.scss";

function HighLight(props: any) {
  return (
    <div className="bg-muted-5 pa8">
      <Box title="">
        <div className="blogWrapper">
          <div className="blog">{props.children}</div>
        </div>
      </Box>
    </div>
  );
}

function FeatureCard(props: any) {
  return (
    <Card>
      <div className="card-style">{props.children}</div>
    </Card>
  );
}

function Phases(props: any) {
  return (
    <Card>
      <div className="card-style">{props.children}</div>
    </Card>
  );
}

function App() {
  return (
    <Layout>
      <div className="banner">
        <div className="banner-text-wrap">
          <h1 className="banner-heading">Changing the way contests run</h1>
          <p className="banner-text">
            Running a contest is hard. We can help make it simple and save you
            time, while offering the best experience for your participants.
          </p>
        </div>
      </div>
      <HighLight>
        <h2 className="blog-heading">The Contest Management Platform</h2>
        <p className="blog-para">
          We are all about saving you money and time, while allowing you to
          offer your participants the best experience possible.
        </p>
      </HighLight>
      <div className="feature-cards-wrap">
        {FeatureData.map((item, index) => {
          return (
            <FeatureCard key={index}>
              <img src={item.image} className="feature-img" />
              <p className="feature-card-text">{item.description}</p>
            </FeatureCard>
          );
        })}
      </div>
      <div className="phase-wrapper">
        <div style={{ marginRight: "50px", marginTop: "100px" }}>
          <h1 className="blog-heading">Registration Phase</h1>
          <ul>
            <li>Increase participation with a dedicated contest profile</li>
            <li>Easily manage deadlines and requirements for registration</li>
            <li>
              Quickly view live analytics of registrants and their profiles
            </li>
            <li>Recruit judges/mentors and evaluate their applications</li>
          </ul>
        </div>
        <img src={require("../../images/mobile_lock.png")} />
      </div>
      <div className="phase-wrapper">
        <img src={require("../../images/mobile_app.png")} />
        <div style={{ marginLeft: "50px", marginTop: "100px" }}>
          <h1 className="blog-heading">Contest Phase</h1>
          <ul>
            <li>Increase participation with a dedicated contest profile</li>
            <li>Easily manage deadlines and requirements for registration</li>
            <li>
              Quickly view live analytics of registrants and their profiles
            </li>
            <li>Recruit judges/mentors and evaluate their applications</li>
          </ul>
        </div>
      </div>
      <div className="phase-wrapper">
        <div style={{ marginRight: "50px", marginTop: "100px" }}>
          <h1 className="blog-heading">Registration Phase</h1>
          <ul>
            <li>Increase participation with a dedicated contest profile</li>
            <li>Easily manage deadlines and requirements for registration</li>
            <li>
              Quickly view live analytics of registrants and their profiles
            </li>
            <li>Recruit judges/mentors and evaluate their applications</li>
          </ul>
        </div>
        <img src={require("../../images/contract.png")} />
      </div>
    </Layout>
  );
}

export default App;
