import MinistryTemplate from "./Ministry";
import {useAppData} from "../../../contexts/AppDataContext";

export const MediaMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate ministry={ministries.Media} />;
}