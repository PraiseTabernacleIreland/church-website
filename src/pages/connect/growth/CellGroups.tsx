import {useAppData} from "../../../contexts/AppDataContext";
import GrowthTemplate from "./Growth";

export const CellGroupsPage = () => {
    const {growthGroups} = useAppData();
    return <GrowthTemplate growth={growthGroups.CellGroups} />;
}