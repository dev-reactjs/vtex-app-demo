import React from "react";
import Layout from "@vtex/styleguide/lib/Layout";
import Box from "@vtex/styleguide/lib/Box";
import Card from "@vtex/styleguide/lib/Card";

import {
  FeatureData, SubTitle, ManagementTitle, HEADER_LINKS
} from "./data";
import "./style.scss";
import { mobile_lock, mobile_app, contract } from "../../assets";
import Header from "../../component/header";
import { routeHistory } from "../../types";
import StepList from "./stepList";

type Props = {
  history: routeHistory
}

function HighLight(props: { children: React.ReactNode }) {
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

function FeatureCard(props: { children: React.ReactNode }) {
  return (
    <Card>
      <div className="card-style">{props.children}</div>
    </Card>
  );
}

function App(props: Props) {
  const { history } = props;
  return (
    <Layout>
      <Header history={history} links={HEADER_LINKS} />
      <div className="banner">
        <div className="banner-text-wrap">
          <h1 className="banner-heading">Changing the way contests run</h1>
          <p className="banner-text">{SubTitle}</p>
        </div>
      </div>
      <HighLight>
        <h2 className="blog-heading">The Contest Management Platform</h2>
        <p className="blog-para">{ManagementTitle}</p>
      </HighLight>
      <div className="feature-cards-wrap">
        {FeatureData.map((item, index) => {
          return (
            <FeatureCard key={index}>
              <img alt="feature" src={item.image} className="feature-img" />
              <p className="feature-card-text">{item.description}</p>
            </FeatureCard>
          );
        })}
      </div>
      <StepList image={mobile_lock} title="Registration Phase" stepleft/>
      <StepList image={mobile_app} title="Contest Phase" stepleft={false} />
      <StepList image={contract} title="Final Phase" stepleft/>
    </Layout>
  );
}

export default App;
