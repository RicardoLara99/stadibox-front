/*
 
 ██████╗  ██████╗ ███╗   ██╗████████╗    ████████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗
 ██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝    ╚══██╔══╝██╔═══██╗██║   ██║██╔════╝██║  ██║
 ██║  ██║██║   ██║██╔██╗ ██║   ██║          ██║   ██║   ██║██║   ██║██║     ███████║
 ██║  ██║██║   ██║██║╚██╗██║   ██║          ██║   ██║   ██║██║   ██║██║     ██╔══██║
 ██████╔╝╚██████╔╝██║ ╚████║   ██║          ██║   ╚██████╔╝╚██████╔╝╚██████╗██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝
                                                                                    
 ████████╗██╗  ██╗██╗███████╗    ███████╗██╗██╗     ███████╗                        
 ╚══██╔══╝██║  ██║██║██╔════╝    ██╔════╝██║██║     ██╔════╝                        
    ██║   ███████║██║███████╗    █████╗  ██║██║     █████╗                          
    ██║   ██╔══██║██║╚════██║    ██╔══╝  ██║██║     ██╔══╝                          
    ██║   ██║  ██║██║███████║    ██║     ██║███████╗███████╗                        
    ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚══════╝                                                                                                         
 
*/

import { TEST_DATA } from "../constants/data_test"


export const getPublicationService = async id => {

    try {
        
        if (!id) return null
        return TEST_DATA.filter(pub => pub.id === id)[0]

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const getPublicationSearchService= async id => {

    try {
        
        if (!id) return null
        return TEST_DATA.filter(pub => {
            // Convierte todo a minúsculas para la comparación, si quieres que sea insensible a mayúsculas
            const lowerCaseSearchTerm = id.toLowerCase();
        
            // Verifica si alguna de las propiedades coincide con el término de búsqueda
            return (
                pub?.id?.toLowerCase().includes(lowerCaseSearchTerm) ||
                pub?.event?.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
                pub?.event?.forum?.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
                pub?.event?.forum?.city?.country?.name?.toLowerCase().includes(lowerCaseSearchTerm)
            );
          });
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}