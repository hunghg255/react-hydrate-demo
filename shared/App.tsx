// export const Expensive = () => {
//     // Hog main thread for 1 second
//     const start = Date.now();
//     while (Date.now() - start < 1000) {
//         // do nothing
//     }

//     console.log('Render Expensive');

//     return <div>Expensive</div>;
// };

// const Item: React.FC<{ value: string }> = ({ value }) => {
//     console.log('Render Item', value);

//     React.useEffect(() => {
//         console.log('Mount Item', value);
//     }, []);

//     return (
//         <div style={{ border: '1px solid black' }}>
//             <Expensive />
//             <input defaultValue={value} />
//         </div>
//     );
// };

export const App = () => {
    // const [isEnhanced, setIsEnhanced] = React.useState(false);

    // console.log('Render App', { isEnhanced });

    // React.useEffect(() => {
    //     console.log('setIsEnhanced(true)');
    //     setIsEnhanced(true);
    // }, []);

    // const elements = isEnhanced ? ['B'] : ['A', 'B'];

    // return elements.map((value) => <Item key={value} value={value} />);

    return <button onClick={() => console.log('Click')}>Click</button>;
};
