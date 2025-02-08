import {useAppData} from "../../contexts/AppDataContext";
import MinistryTemplate from "./Ministry";

export const WorshipMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[1]}/>;
}