import {useAppData} from "../../../contexts/AppDataContext";
import GrowthTemplate from "./Growth";

export const SundaySchoolPage = () => {
    const {growthGroups} = useAppData();
    return <GrowthTemplate growth={growthGroups.SundaySchool} />;
}