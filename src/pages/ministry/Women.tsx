import {useAppData} from "../../contexts/AppDataContext";
import MinistryTemplate from "./Ministry";

export const WomenMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[5]}/>;
}