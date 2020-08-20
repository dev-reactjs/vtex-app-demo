import React from "react";
import Card from "@vtex/styleguide/lib/Card";

import { sample } from "../../assets";
import { ITEMS } from "./data";

type ITEM = {
    id: number,
    location: string,
    name: string,
    type: string,
    category: string,
    scheduleOf: string,
    detail: string,
}

function SearchResult() {
    return (
        <div className="search-result-wrap">
            <div className="item-list">
                {ITEMS.map((item: ITEM) => {
                    const { id, location, name, type, category, scheduleOf, detail } = item;
                    return (
                        <div className="item" key={id}>
                            <Card>
                                <div className="item-image">
                                    <img src={sample} alt="explore" />
                                </div>
                                <div className="item-data">
                                    <span>{location}</span>
                                    <h4>{name}</h4>
                                    <h5>{type}</h5>
                                    <div className="category-wrap">
                                        <span>{category}</span>
                                        <span>{scheduleOf}</span>
                                    </div>
                                    <p>{detail}</p>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchResult;
