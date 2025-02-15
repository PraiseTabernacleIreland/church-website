import MinistryTemplate from "./Ministry";
import {useAppData} from "../../../contexts/AppDataContext";
import ministry from "./Ministry";

export const HospitalityMinistryPage = () => {
    const {ministries} = useAppData();
    return <MinistryTemplate ministry={ministries.Hospitality} />;
}