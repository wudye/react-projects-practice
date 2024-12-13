import React, { createContext, useState, useEffect} from 'react';
import featureDataSeviceCall from '../data';



export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({children}) {
    const [loading, setLoading] = useState(true);
    const [enableFlags, setEnableFlags] = useState({});

    async function fetchFeatureFlags() {
        
        try {
            setLoading(true);
            const responnse = await featureDataSeviceCall();
            console.log(responnse);
            setEnableFlags(responnse);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            throw new Error("Error fetching data");

        }
    }
    useEffect(() => {
        fetchFeatureFlags();
    })

    return (
        <FeatureFlagsContext.Provider value={{loading,enableFlags}} >
            {children}
        </FeatureFlagsContext.Provider>
    );

}