import {useAppData} from "../../../contexts/AppDataContext";
import FellowshipTemplate from "../fellowships/Fellowship";

export const MenFellowshipPage = () => {
    const {fellowships} = useAppData();
    return <FellowshipTemplate fellowship={fellowships.Men} />;
}