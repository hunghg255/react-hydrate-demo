import * as express from 'express';
import * as ReactDOMServer from 'react-dom/server';
import { App } from '../shared/App';

const app = express();

app.use(express.static('client-target'));

app.get('*', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    res.send(`
        <div id="root">${app}</div>
        <script src="index.js"></script>
    `);
});

app.listen(8080, () => {
    console.log('Listening on port 8080.');
});
