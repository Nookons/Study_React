import React, {useState} from 'react';

const UseCallback = () => {
    const listOfCities = ['Beijing', 'Tokyo', 'Kinshasa', 'Moscow', 'Jakarta'];

    const Page = () => {
        const [name, setName] = useState("");
        const [list, setList] = useState(listOfCities);

        const handleClick = () => {
            setList([...list, name]);
            setName("");
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        };

        const handleRemoveClick = (item: string) => {
            const filteredList = list.filter((listItem) => listItem !== item);

            setList(filteredList);
        };

        console.log("Page render");

        return (
            <div>
                <input type="text" value={name} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
                <CitiesList list={list} onRemoveClick={handleRemoveClick}/>
            </div>
        );
    };
};

export default UseCallback;

export const CitiesList = ({list, onRemoveClick}) => {
    console.log("List render");

    return list.map((item) => {
        return <City key={item} city={item} onRemoveClick={onRemoveClick}/>;
    });
};

export const City = ({city, onRemoveClick}) => {
    const handleCityClick = () => onRemoveClick(city);

    console.log("Element render");

    return <div onClick={handleCityClick}>{city}</div>;
};