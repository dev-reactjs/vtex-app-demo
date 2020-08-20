import React from "react";
import Input from "@vtex/styleguide/lib/Input";
import Dropdown from "@vtex/styleguide/lib/Dropdown";
import CheckboxGroup from "@vtex/styleguide/lib/CheckboxGroup";
import Button from "@vtex/styleguide/lib/Button";

import { TYPE_OPTIONS } from "./data";

type Props = {
    updateFilters: Function,
    additionalOptions: Object,
    type: string,
}

function Filters(props: Props) {
    const { updateFilters, additionalOptions, type } = props;
    return (
        <div className="row">
            <Input
                label="Location"
                placeholder="Enter Your Location"
                onChange={(e: string) => updateFilters(e, "location")}
            />
            <div className="space">
                <Dropdown
                    label="Type"
                    size="regular"
                    value={type}
                    options={TYPE_OPTIONS}
                    onChange={(e: string) => updateFilters(e, "type")}
                />
            </div>
            <CheckboxGroup
                name="options"
                label="Additional Options"
                id="options"
                value="Filter 1"
                checkedMap={additionalOptions}
                onGroupChange={(newCheckedMap: Object) => updateFilters(
                    newCheckedMap, "additionalOptions"
                )}
            />
            <Button>Search</Button>
        </div>
    );
}

export default Filters;
