import ReactDom from 'react-dom';

import App from './App';

import './index.css';

import Context from './context/context';

import Firsttodolist from './firsttodolist/Firsttodolist';

ReactDom.render(<Context /> , document.getElementById('root'));