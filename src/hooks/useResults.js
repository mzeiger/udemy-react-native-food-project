import { useEffect, useState, Error } from "react";
import yelp from "../api/yelp";

export default () => {

    const [searchTerm, setTerm] = useState('');
    const [results, setResults] = useState([]);

    /*     const createTwoButtonAlert = (e) =>
            Alert.alert('Problem', e, [
                {
                    text: "",
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
     */
    const searchAPI = async () => {
        const response = await yelp.get('/search',
            {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'colorado springs',
                }
            }
        );
        setResults(response.data.businesses);
    }
    return [searchAPI, results];
}