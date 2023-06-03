import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Navbar />

            <AppRouter />
        </div>
    );
};

export default App;