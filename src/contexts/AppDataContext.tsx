import React, { createContext, useContext, ReactNode } from "react";
import { SERVICE_DATA } from "../appData/service";
import { AppData } from "../types";
import { MINISTRIES } from "../appData/ministry";
import { TEAMS } from "../appData/teams";
import { FELLOWSHIPS } from "../appData/fellowship";
import { GROWTH_GROUPS } from "../appData/growth";

/**
 * Context for providing centralized application data throughout the component tree
 * 
 * This context consolidates all static application data (services, ministries, fellowships,
 * growth groups, and teams) into a single source of truth accessible from any component.
 */
const AppDataContext = createContext<AppData | undefined>(undefined);

/**
 * Centralized application data containing all static content
 */
const APP_DATA: AppData = {
    services: SERVICE_DATA,
    ministries: MINISTRIES,
    fellowships: FELLOWSHIPS,
    growthGroups: GROWTH_GROUPS,
    teams: TEAMS
}

/**
 * Provider component that makes application data available to all child components
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Child components that will have access to the app data
 * 
 * @example
 * <AppDataProvider>
 *   <App />
 * </AppDataProvider>
 */
export const AppDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AppDataContext.Provider value={APP_DATA}>
            {children}
        </AppDataContext.Provider>
    );
};

/**
 * Custom hook to access application data from the context
 * 
 * @returns {AppData} Object containing services, ministries, fellowships, growth groups, and teams
 * @throws {Error} If used outside of AppDataProvider
 * 
 * @example
 * const { services, ministries, teams } = useAppData();
 * 
 * return (
 *   <div>
 *     <h2>Our Services</h2>
 *     {services.map(service => <ServiceCard key={service.id} {...service} />)}
 *   </div>
 * );
 */
export const useAppData = () => {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within an AppDataProvider');
    }
    return context;
};
