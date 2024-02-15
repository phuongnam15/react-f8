import { useState, useEffect } from 'react';

function Content() {
    const [second, setSecond] = useState(180);
    useEffect(() => {
        const timeId = setInterval(() => {
            setSecond(prev => prev - 1);
            console.log(111);
        }, 1000);

        return () => clearInterval(timeId);
    }, []);

    return (
        <div>
            {second}
        </div>
    )
}
export default Content;