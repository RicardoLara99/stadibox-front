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

import { getPublicationSearchService, getPublicationService } from "../services/publications";

export const useProducts = () => {
  /**
   * Returns all the available products
   * @param id String, The publication's ID
   * @returns
   */
  const getPublication = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getPublicationService(id);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * returns all products matching the search query
   * @param id String, Term to search
   * @returns
   */
  const getPublicationSearch = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getPublicationSearchService(id);
        
        setTimeout(() => {
          resolve(response);  
        }, 2500);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getPublication,
    getPublicationSearch
  };
};
