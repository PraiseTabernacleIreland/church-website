import {useAppData} from "../../contexts/AppDataContext";
import MinistryTemplate from "./Ministry";

export const EvangelismMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[3]}/>;
}