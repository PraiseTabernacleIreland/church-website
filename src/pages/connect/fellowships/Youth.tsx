import {useAppData} from "../../../contexts/AppDataContext";
import FellowshipTemplate from "../fellowships/Fellowship";

export const YouthFellowshipPage = () => {
    const {fellowships} = useAppData();
    return <FellowshipTemplate fellowship={fellowships.Youth} />;
}