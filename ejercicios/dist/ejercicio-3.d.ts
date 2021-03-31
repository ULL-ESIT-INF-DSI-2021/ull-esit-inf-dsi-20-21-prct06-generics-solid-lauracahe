/**
 * @brief Interface for a emission collection
 */
export interface Streamable<T> {
    collection: T[];
    /**
     * @brief Add a new emission to the collection
     * @param emission emission to add
     */
    add(emission: T): void;
    /**
     * @return Returns the collection of emissions
     */
    getCollection(): T[];
}
/**
 * @brief search interface
 */
export interface Search<T> {
    /**
    * @brief Finds the elements that have the specified attribute in the collection
    * @param attribute attribute to find
    * @param type type of attribute
    */
    search(attribute: string, type: string): T[];
}
export declare abstract class BasicStreamableCollection<T> implements Streamable<T>, Search<T> {
    collection: T[];
    /**
     *
     * @param collection Create a collection to search or add an emission
     */
    constructor(collection: T[]);
    /**
     * @brief Add a new emission to the collection
     * @param emission emission to add
     */
    add(emission: T): void;
    /**
     * @return Returns the collection of emissions
     */
    getCollection(): T[];
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    abstract search(attribute: string, type: string): T[];
}
/**
 * @brief Specifies the attributes that every series must have
 */
export declare type Serie = {
    name: string;
    genre: string;
    year: string;
    seasons: string;
    episodes: string;
};
/**
* @brief Stores the series collection and allows searching within the collection
*/
export declare class Series extends BasicStreamableCollection<Serie> {
    /**
     * @param collection series collection (use BasicStreamableCollection template)
     */
    constructor(collection: Serie[]);
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute: string, type: string): Serie[];
}
/**
 * @brief Specify the attributes that a movie should have
 */
export declare type Movie = {
    name: string;
    genre: string;
    year: string;
    director: string;
    duration: string;
};
/**
* @brief Stores the collection of movies and allows you to search within the collection
*/
export declare class Movies extends BasicStreamableCollection<Movie> {
    /**
     * @param collection movie collection (use BasicStreamableCollection template)
     */
    constructor(collection: Movie[]);
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute: string, type: string): Movie[];
}
/**
 * @brief Specify the attributes that a documentary should have
 */
export declare type Documentary = {
    name: string;
    genre: string;
    year: string;
    duration: string;
};
/**
* @brief Stores the collection of documentaries and allows searching within the collection
*/
export declare class Documentaries extends BasicStreamableCollection<Documentary> {
    /**
     * @param collection Documentary collection (use BasicStreamableCollection template)
     */
    constructor(collection: Documentary[]);
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute: string, type: string): Documentary[];
}
