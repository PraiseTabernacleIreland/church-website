import MinistryTemplate from "./Ministry";
import {useAppData} from "../../contexts/AppDataContext";

export const ChildrenMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate {...ministries[0]}/>;
}