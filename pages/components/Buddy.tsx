import React, { FC, useState } from 'react'

type FruitProps = {
    fruitDetector: string;
}

export const Buddy: FC<FruitProps> = ({ fruitDetector }) => {
    const [currentFruit, setCurrentFruit] = useState(fruitDetector)

    const changeFruit = (newFruit: string): void => {
        setCurrentFruit(newFruit)
    }

    return (
        <form>
            <select
                onChange={(event) => changeFruit(event.target.value)}
                value={currentFruit}
            >
                <option value="Public">Public</option>
                <option value="Invite People">Invite People</option>
            </select>
        </form>
    )
}

export default Buddy