import {useAppData} from "../../../contexts/AppDataContext";
import FellowshipTemplate from "../fellowships/Fellowship";

export const FamilyFellowshipPage = () => {
    const {fellowships} = useAppData();
    return <FellowshipTemplate fellowship={fellowships.Family} />;
}