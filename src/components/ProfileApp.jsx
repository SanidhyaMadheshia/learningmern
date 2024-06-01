import {people} from  './ProfileData'
import { getImageURL } from './ProfilePic'

export function DisplayProfiles(){
    const chemists=people.filter((person)=>{
        return person.profession==='chemist';
    });
    const ListItems=chemists.map((aadmi)=>{
        return (
            <li>
                <img 
                src={getImageURL(aadmi.imageId)}
                alt={aadmi.name}
                />
                <p>
                    <b>{aadmi.name}</b>
                    {' ' + aadmi.profession + ' '}
                    known for {aadmi.accomplishment}
                </p>
            </li>
        );
    });
    return (    
        <ul>
            {ListItems}
        </ul>
    );
}