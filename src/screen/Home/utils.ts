import { filterType, ITEM } from "../../types";

export function filterData(filters: filterType, data: Array<ITEM>) {
    const { additionalOptions, location, type } = filters;
    const options = Object.values(additionalOptions).map(data => data.checked && data.label);
    if(options.length && location && type) {
        return data.filter((item) => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (item.type === type)
            && (options.includes(item.category))
        ));
    } else if(options.length && location) {
        return data.filter(item => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (options.includes(item.category))
        ));
    } else if(options.length && type) {
        return data.filter(item => (
            (item.type === type)
            && (options.includes(item.category))
        ));
    }  else if(location && type) {
        return data.filter(item => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (item.type === type)
        ));
    } else {
        return data;
    }
}