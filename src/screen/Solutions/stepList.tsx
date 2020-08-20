import React from "react";

import { RegistrationSteps } from "./data";

type Props = {
    stepleft: boolean,
    image: string,
    title: string,
}

function StepList(props: Props) {
    const { stepleft, image, title } = props;
    return (
        <div className="phase-wrapper">
            {!stepleft && <img src={image} alt="step" />}
            <div className={`step-${stepleft ? 'right' : 'left'}-wrapper`}>
                <h1 className="blog-heading">{title}</h1>
                <ul>
                    {RegistrationSteps.map(step => (
                        <li key={step}>{step}</li>
                    ))}
                </ul>
            </div>
            {stepleft && <img src={image} alt="step" />}
        </div>
    );
}

export default StepList;
