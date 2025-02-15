import MinistryTemplate from "./Ministry";
import {useAppData} from "../../../contexts/AppDataContext";

export const IntercessionMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate ministry={ministries.Intercession} />;
}