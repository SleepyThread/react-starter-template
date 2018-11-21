


export const loadState = () => {
    try{

        const appstate = localStorage.getItem("appState");
        if(appstate === null) {
            return undefined;
        }
        return JSON.parse(appstate);
    } catch (e) {
       return undefined;
    }

};

export const saveState = (state) => {
    try {
        const appState = JSON.stringify(state);
        localStorage.setItem("appState", appState);
    } catch (err) {
    }
};