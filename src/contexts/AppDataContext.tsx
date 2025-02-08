import React, {createContext, useContext} from "react";
import {SERVICE_DATA} from "../appData/service";
import {AppData} from "../types";
import {MINISTRIES} from "../appData/ministry";
import {TEAMS} from "../appData/teams";

const AppDataContext = createContext<AppData>(null);

const APP_DATA: AppData = {
    services: SERVICE_DATA,
    ministries: MINISTRIES,
    teams: TEAMS
}

export const AppDataProvider = ({children}) => {
    return (
        <AppDataContext.Provider value={APP_DATA}>
            {children}
        </AppDataContext.Provider>
    );
};

export const useAppData = () => useContext(AppDataContext);