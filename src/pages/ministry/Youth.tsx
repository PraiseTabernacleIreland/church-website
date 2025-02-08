import {useAppData} from "../../contexts/AppDataContext";
import MinistryTemplate from "./Ministry";

export const YouthMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[2]}/>;
}