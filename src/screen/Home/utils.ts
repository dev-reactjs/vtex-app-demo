import { filterType, ITEM } from "../../types";

export function filterData(filters: filterType, data: Array<ITEM>) {
    const { additionalOptions, location, type } = filters;
    const options = Object.values(additionalOptions).map(data => data.checked && data.label);
    const validOption = options.filter(data => data);
    if(validOption.length && location && type) {
        return data.filter((item) => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (item.type === type)
            && (validOption.includes(item.category))
        ));
    } else if(validOption.length && location) {
        return data.filter(item => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (validOption.includes(item.category))
        ));
    } else if(validOption.length && type) {
        return data.filter(item => (
            (item.type === type)
            && (validOption.includes(item.category))
        ));
    } else if(location && type) {
        return data.filter(item => (
            item.location.toLowerCase().includes(location.toLowerCase())
            && (item.type === type)
        ));
    } else if(validOption.length) {
        return data.filter(item => ((validOption.includes(item.category))));
    } else if(location) {
        return data.filter(item => (
            item.location.toLowerCase().includes(location.toLowerCase())
        ));
    } else if(type) {
        return data.filter(item => ((item.type === type)));
    } else {
        return data;
    }
}