import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Search from './routes/Search';
import Results from './routes/Results';

const rootElement = document.getElementById('root');
render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Search />}></Route>
                <Route path="/results" element={<Results />}></Route>
                <Route
                    path="*"
                    element={
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                            <h1>
                                <strong>404</strong> - There's no such route!
                            </h1>
                        </div>
                    }
                ></Route>
            </Route>
        </Routes>
    </HashRouter>,
    rootElement
);
