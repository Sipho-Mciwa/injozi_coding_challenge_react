import axios from "axios";

export const RaceDetails = async (Year) => {

    try{
        const circuitInfoURL = `http://ergast.com/api/f1/${Year}/results/1.json`;
    
        const response = await axios.get(circuitInfoURL).then((res) => {
            let circuitInfo = [...res.data['MRData']['RaceTable']['Races']]
            return(circuitInfo);
        })
        
        return (response);
    }
    catch (error) {
        if (error.response && error.response.data) throw error.response.data;
        else throw error;
    }
}