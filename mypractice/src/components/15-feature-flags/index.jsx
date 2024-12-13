
import React, { useContext } from 'react';
import { FeatureFlagsContext } from './context/index.jsx';
import LightDarkMode from '../8-switch-theme/index.jsx';
import TikTakToe from '../14-tik-tak-toe/index.jsx';
import RandomColor from '../11-custom-modal-popu/modal.jsx';
import Accordion from '../1-accordian/index.jsx';
import TreeView from '../6-tree-view/index.jsx';
import { menus } from '../6-tree-view/data.js';

export default function FeatureFlags() {
    const {loading, enableFlags} = useContext(FeatureFlagsContext);
    const componentToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTickTakToe',
            component: <TikTakToe />

        },
        {
            key: 'showRandomColorGeneratorr',
            component: <RandomColor />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeViewer',
            component: <TreeView menus={menus} />
        }
    
    ]
    if (loading) return <h1>Loading...</h1>
    
    function checkEnabled(params) {
        return enableFlags[params];
    }
    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentToRender.map((item) => 
                    checkEnabled(item.key) ? item.component : null
                )
            }

        </div>
    )

}