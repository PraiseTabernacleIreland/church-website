import {useAppData} from "../../contexts/AppDataContext";
import MinistryTemplate from "./Ministry";

export const MenMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[4]}/>;
}